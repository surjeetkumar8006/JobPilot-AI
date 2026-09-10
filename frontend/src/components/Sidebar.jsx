import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Briefcase, FileText, BarChart3, Settings, LogOut, Sparkles } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/landing');
  };

  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/applications', label: 'Applications', icon: Briefcase },
    { to: '/drafts', label: 'AI Drafts', icon: FileText },
    { to: '/analytics', label: 'Analytics & Insights', icon: BarChart3 },
    { to: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0a0f1d]/90 backdrop-blur-xl border-r border-slate-800/80 hidden md:flex flex-col justify-between p-4 min-h-screen">
      <div className="space-y-6">
        <div className="flex items-center space-x-3 px-3 py-2">
          <div className="p-2 bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white rounded-xl shadow-md shadow-indigo-600/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white">JobPilot <span className="text-cyan-400">AI</span></span>
        </div>

        <nav className="space-y-1.5">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-800/90 text-white border border-slate-700/60 shadow-lg shadow-black/40 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`
                }
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="pt-4 border-t border-slate-800/80">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
