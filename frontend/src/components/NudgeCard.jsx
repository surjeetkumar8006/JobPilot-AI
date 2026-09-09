import React from 'react';
import { BellRing, Calendar } from 'lucide-react';
import { formatDate } from '../utils/formatDate';

export default function NudgeCard({ nudge }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg">
          <BellRing className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">{nudge.type}</h4>
          <p className="text-xs text-slate-400">{nudge.company} — {nudge.role}</p>
        </div>
      </div>
      <div className="flex items-center space-x-1.5 text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
        <span>Due: {formatDate(nudge.dueDate)}</span>
      </div>
    </div>
  );
}
