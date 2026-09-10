import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Bell, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/landing');
  };

  return (
    <header className="h-16 bg-[#0a0f1d]/90 backdrop-blur-xl border-b border-slate-800/80 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center space-x-3 md:hidden">
        <div className="p-1.5 bg-indigo-600/20 text-cyan-400 rounded-lg">
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="font-bold text-lg text-white">JobPilot AI</span>
      </div>

      <div className="hidden md:flex items-center space-x-2">
        <span className="text-xs text-slate-400">Workspace:</span>
        <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2.5 py-1 rounded-full">
          GCP Gemini Connected
        </span>
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        {/* Live Status Pill */}
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>1 User Online</span>
        </div>

        <button className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-3 pl-3 border-l border-slate-800">
          <div className="flex items-center space-x-2.5 bg-slate-900 border border-slate-800 p-1.5 px-3 rounded-xl">
            <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-white">
              {user?.name ? user.name.substring(0, 1).toUpperCase() : 'S'}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white leading-tight">{user?.name || 'Surjeet'}</span>
              <span className="text-[10px] text-slate-400 leading-tight">Developer</span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            title="Logout"
            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
