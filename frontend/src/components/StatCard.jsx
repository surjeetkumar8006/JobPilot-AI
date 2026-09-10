import React from 'react';

export default function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="bg-[#0b101d]/90 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 shadow-lg shadow-black/20 hover:shadow-cyan-500/5 transition-all duration-300 group">
      <div className="flex items-center space-x-4">
        {Icon && (
          <div className="p-3 bg-slate-900/90 border border-slate-800/90 rounded-xl text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">{title}</span>
          <div className="mt-1 flex items-baseline space-x-2">
            <span className="text-2xl font-extrabold text-white tracking-tight">{value}</span>
            {subtitle && <span className="text-[11px] text-slate-500 font-medium">{subtitle}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
