import React from 'react';
import { Clock } from 'lucide-react';
import { formatDate } from '../utils/formatDate';

export default function StatusTimeline({ history = [] }) {
  if (!history || history.length === 0) {
    return (
      <div className="text-xs text-slate-500 italic py-2">
        No status changes logged yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {history.map((item, idx) => (
        <div key={idx} className="flex items-start space-x-3 text-xs">
          <div className="p-1 bg-indigo-600/20 text-indigo-400 rounded mt-0.5">
            <Clock className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-slate-200">
              Status updated from <span className="font-semibold text-slate-400">{item.from}</span> to <span className="font-semibold text-indigo-400">{item.to}</span>
            </p>
            <span className="text-slate-500">{formatDate(item.changedAt)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
