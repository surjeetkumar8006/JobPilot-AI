import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import { formatDate } from '../utils/formatDate';

export default function ApplicationCard({ application }) {
  return (
    <div className="bg-[#0b101d]/90 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 shadow-lg shadow-black/20 hover:shadow-cyan-500/5 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">{application.role}</h3>
          <div className="flex items-center space-x-2 text-slate-400 text-xs mt-1.5 font-medium">
            <Building2 className="w-3.5 h-3.5 text-cyan-500/70" />
            <span>{application.company}</span>
          </div>
        </div>
        <StatusBadge status={application.status} />
      </div>

      <div className="mt-5 pt-3.5 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center space-x-1.5">
          <Calendar className="w-3.5 h-3.5 text-slate-500" />
          <span>Applied: {formatDate(application.applicationDate)}</span>
        </div>
        <Link
          to={`/applications/${application.id}`}
          className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-1 transition-colors"
        >
          <span>View Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
