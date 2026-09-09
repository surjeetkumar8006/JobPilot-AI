import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import StatusTimeline from '../components/StatusTimeline';
import DraftCard from '../components/DraftCard';
import GenerateButton from '../components/GenerateButton';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchApplicationById, updateApplicationStatus, generateAIDraft } from '../services/api';
import { ArrowLeft, Building2, Sparkles } from 'lucide-react';
import { STATUS_COLORS } from '../utils/status';

export default function ApplicationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    fetchApplicationById(id)
      .then(data => {
        setApp(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleStatusChange = async (newStatus) => {
    const updated = await updateApplicationStatus(id, newStatus);
    setApp(prev => ({ ...prev, status: newStatus }));
  };

  const handleGenerateCoverLetter = async () => {
    setGenerating(true);
    const draft = await generateAIDraft({
      applicationId: id,
      company: app.company,
      role: app.role,
      jobDescription: app.jobDescription,
      type: 'Cover Letter'
    });
    setDrafts([draft, ...drafts]);
    setGenerating(false);
  };

  if (loading) return <LoadingSpinner />;
  if (!app) return <div className="text-center text-slate-400 py-12">Application not found</div>;

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">{app.role}</h1>
            <div className="flex items-center space-x-2 text-slate-400 text-sm mt-1">
              <Building2 className="w-4 h-4" />
              <span>{app.company}</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <label className="text-xs text-slate-400">Status:</label>
            <select
              value={app.status}
              onChange={e => handleStatusChange(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none"
            >
              {Object.keys(STATUS_COLORS).map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
            <StatusBadge status={app.status} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase mb-2">Job Description</h3>
              <p className="text-sm text-slate-400 bg-slate-950 p-4 rounded-xl border border-slate-800/80 leading-relaxed whitespace-pre-wrap">
                {app.jobDescription || 'No description added yet.'}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-300 uppercase">AI Cover Letter & Drafts</h3>
                <GenerateButton onClick={handleGenerateCoverLetter} loading={generating} label="Generate Cover Letter" />
              </div>
              <div className="space-y-4">
                {drafts.map(d => (
                  <DraftCard key={d.id} draft={d} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-slate-200">Status History</h3>
              <StatusTimeline history={app.history} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
