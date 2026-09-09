import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import { Building2, Calendar, Sparkles } from 'lucide-react';
import { formatDate } from '../utils/formatDate';

export default function ApplicationCard({ application }) {
  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-5 transition-all shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-white text-base">{application.role}</h3>
          <div className="flex items-center space-x-2 text-slate-400 text-sm mt-1">
            <Building2 className="w-4 h-4" />
            <span>{application.company}</span>
          </div>
        </div>
        <StatusBadge status={application.status} />
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center space-x-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>Applied: {formatDate(application.applicationDate)}</span>
        </div>
        <Link
          to={`/applications/${application.id}`}
          className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center space-x-1"
        >
          <span>View Details</span>
        </Link>
      </div>
    </div>
  );
}
