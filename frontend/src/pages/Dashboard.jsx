import React, { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';
import ApplicationCard from '../components/ApplicationCard';
import NudgeCard from '../components/NudgeCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ApplicationForm from '../components/ApplicationForm';
import { useApplications } from '../hooks/useApplications';
import { useAuth } from '../hooks/useAuth';
import { fetchNudges, createApplication } from '../services/api';
import { Briefcase, Send, Trophy, Sparkles, Plus, AlertTriangle, Eye, Target, Activity } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const { applications, loading, setApplications } = useApplications();
  const [nudges, setNudges] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchNudges().then(setNudges).catch(console.error);
  }, []);

  const handleAddApp = async (formData) => {
    const created = await createApplication(formData);
    setApplications([created, ...applications]);
    setShowModal(false);
  };

  if (loading) return <LoadingSpinner />;

  const totalApps = applications.length;
  const interviewing = applications.filter(a => a.status === 'Interview').length;
  const offers = applications.filter(a => a.status === 'Offer').length;
  const pendingNudges = nudges.length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Greeting Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Hello, {user?.name ? user.name.split(' ')[0] : 'Surjeet'} 👋
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Unlock opportunities, optimize your resume with Gemini AI, and monitor job matching progress.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Add Application</span>
        </button>
      </div>

      {/* Alert Banner */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center space-x-3 text-amber-300 text-xs font-semibold">
        <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
        <span>GCP Gemini Engine Active: Paste job descriptions when adding applications to trigger automated skill extraction and cover letter generation.</span>
      </div>

      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Applications" value={totalApps} icon={Briefcase} subtitle="Tracked records" />
        <StatCard title="Profile Views" value={interviewing > 0 ? interviewing * 4 : 12} icon={Eye} subtitle="Recruiter hits" />
        <StatCard title="AI Match Score" value="78%" icon={Target} subtitle="Resume fit" />
        <StatCard title="Completeness" value="85%" icon={Activity} subtitle="Profile ready" />
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white tracking-tight">Recent Applications</h2>
            <span className="text-xs text-slate-400">Showing 4 of {totalApps}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {applications.slice(0, 4).map(app => (
              <ApplicationCard key={app.id} application={app} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white tracking-tight">Automated Nudges</h2>
            <span className="text-xs text-cyan-400 font-semibold bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded-full">Cloud Scheduler</span>
          </div>

          <div className="space-y-3">
            {nudges.map(nudge => (
              <NudgeCard key={nudge.id} nudge={nudge} />
            ))}
          </div>
        </div>
      </div>

      {showModal && <ApplicationForm onSubmit={handleAddApp} onClose={() => setShowModal(false)} />}
    </div>
  );
}
