import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 text-center shadow-xl">
        <div className="inline-flex p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl">
          <Sparkles className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome to JobPilot AI</h1>
          <p className="text-slate-400 text-sm mt-1">Smart career optimization & job tracking powered by Google Cloud & Gemini</p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all"
        >
          <span>Continue as Early Developer</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
