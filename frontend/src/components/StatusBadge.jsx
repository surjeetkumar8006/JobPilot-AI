import React from 'react';
import { STATUS_COLORS } from '../utils/status';

export default function StatusBadge({ status }) {
  const colorClass = STATUS_COLORS[status] || 'bg-slate-800 text-slate-300';
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
      {status}
    </span>
  );
}
