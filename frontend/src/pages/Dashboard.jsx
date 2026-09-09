import React, { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';
import ApplicationCard from '../components/ApplicationCard';
import NudgeCard from '../components/NudgeCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ApplicationForm from '../components/ApplicationForm';
import { useApplications } from '../hooks/useApplications';
import { fetchNudges, createApplication } from '../services/api';
import { Briefcase, Send, Trophy, Sparkles, Plus } from 'lucide-react';

export default function Dashboard() {
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Career Control Center</h1>
          <p className="text-slate-400 text-sm">Real-time application pipeline and GCP Gemini optimization.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-semibold text-sm shadow-md shadow-indigo-600/30 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Add Application</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Applications" value={totalApps} icon={Briefcase} subtitle="Active tracking" />
        <StatCard title="Interviewing" value={interviewing} icon={Send} subtitle="Active rounds" />
        <StatCard title="Offers Received" value={offers} icon={Trophy} subtitle="Target met" />
        <StatCard title="Pending Nudges" value={nudges.length} icon={Sparkles} subtitle="Cloud Scheduler" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-white">Recent Applications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {applications.slice(0, 4).map(app => (
              <ApplicationCard key={app.id} application={app} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Automated Nudges</h2>
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
