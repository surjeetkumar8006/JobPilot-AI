import React, { useState } from 'react';
import ApplicationCard from '../components/ApplicationCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ApplicationForm from '../components/ApplicationForm';
import { useApplications } from '../hooks/useApplications';
import { createApplication } from '../services/api';
import { Search, Plus } from 'lucide-react';

export default function Applications() {
  const { applications, loading, setApplications } = useApplications();
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filtered = applications.filter(a =>
    a.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddApp = async (formData) => {
    const created = await createApplication(formData);
    setApplications([created, ...applications]);
    setShowModal(false);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">All Applications</h1>
          <p className="text-slate-400 text-sm mt-1">Manage and track your active job applications.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 px-5 py-3 bg-white hover:bg-slate-100 rounded-xl text-slate-900 font-semibold text-sm transition-all shadow-none self-start"
        >
          <Plus className="w-4 h-4 text-slate-900" />
          <span>New Application</span>
        </button>
      </div>

      <div className="relative">
        <Search className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5" />
        <input
          type="text"
          placeholder="Search by company or role..."
          className="w-full bg-[#0b101d] border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(app => (
          <ApplicationCard key={app.id} application={app} />
        ))}
      </div>

      {showModal && <ApplicationForm onSubmit={handleAddApp} onClose={() => setShowModal(false)} />}
    </div>
  );
}
