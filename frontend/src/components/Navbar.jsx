import React from 'react';
import { Sparkles, Bell, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-slate-900/80 backdrop-blur border-b border-slate-800 px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg">
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="font-bold text-lg text-white">JobPilot <span className="text-indigo-400">AI</span></span>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-400 hover:text-slate-200 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-3 pl-4 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm text-white">
            JD
          </div>
          <span className="text-sm font-medium text-slate-300 hidden md:inline">{user?.name}</span>
        </div>
      </div>
    </header>
  );
}
