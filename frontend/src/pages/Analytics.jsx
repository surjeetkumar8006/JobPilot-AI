import React from 'react';
import StatCard from '../components/StatCard';
import CareerInsightsCard from '../components/CareerInsightsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useApplications } from '../hooks/useApplications';
import { Briefcase, Send, Trophy, Percent, BarChart3, PieChart } from 'lucide-react';

export default function Analytics() {
  const { applications, loading } = useApplications();

  if (loading) return <LoadingSpinner />;

  const total = applications.length || 1;
  const appliedCount = applications.filter(a => a.status === 'Applied').length;
  const interviewCount = applications.filter(a => a.status === 'Interview').length;
  const offerCount = applications.filter(a => a.status === 'Offer').length;
  const rejectedCount = applications.filter(a => a.status === 'Rejected').length;

  const interviewRate = ((interviewCount / total) * 100).toFixed(1);
  const offerRate = ((offerCount / total) * 100).toFixed(1);
  const rejectionRate = ((rejectedCount / total) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Analytics & Career Intelligence</h1>
        <p className="text-slate-400 text-sm">Data-driven performance metrics and Gemini AI career insights.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Applications" value={total} icon={Briefcase} subtitle="Tracked records" />
        <StatCard title="Interview Rate" value={`${interviewRate}%`} icon={Percent} subtitle={`${interviewCount} interviews`} />
        <StatCard title="Offer Rate" value={`${offerRate}%`} icon={Trophy} subtitle={`${offerCount} offer letters`} />
        <StatCard title="Rejection Rate" value={`${rejectionRate}%`} icon={BarChart3} subtitle={`${rejectedCount} closed`} />
      </div>

      {/* Gemini Career Insights */}
      <CareerInsightsCard applications={applications} />

      {/* Breakdown Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center space-x-2 text-slate-200 font-bold text-base">
            <PieChart className="w-5 h-5 text-indigo-400" />
            <span>Applications by Pipeline Stage</span>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs text-slate-300 font-medium mb-1">
                <span>Applied ({appliedCount})</span>
                <span>{((appliedCount / total) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(appliedCount / total) * 100}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 font-medium mb-1">
                <span>Interviewing ({interviewCount})</span>
                <span>{interviewRate}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${interviewRate}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 font-medium mb-1">
                <span>Offers Received ({offerCount})</span>
                <span>{offerRate}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${offerRate}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 font-medium mb-1">
                <span>Rejected ({rejectedCount})</span>
                <span>{rejectionRate}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${rejectionRate}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center space-x-2 text-slate-200 font-bold text-base">
            <BarChart3 className="w-5 h-5 text-purple-400" />
            <span>Top Targeted Roles</span>
          </div>

          <div className="space-y-3 pt-2 text-sm text-slate-300">
            <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-semibold text-white">Full Stack / Backend Engineer</span>
              <span className="text-xs bg-indigo-600/20 text-indigo-400 px-2.5 py-1 rounded-full font-bold">12 Apps</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-semibold text-white">Frontend Engineer (React / Next.js)</span>
              <span className="text-xs bg-indigo-600/20 text-indigo-400 px-2.5 py-1 rounded-full font-bold">8 Apps</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-semibold text-white">AI / Cloud Systems Engineer</span>
              <span className="text-xs bg-indigo-600/20 text-indigo-400 px-2.5 py-1 rounded-full font-bold">4 Apps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
