import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Briefcase, FileText, Send, BellRing, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function LandingPage() {
  const navigate = useNavigate();
  const { loginDemoUser } = useAuth();

  const handleDemoAccess = () => {
    loginDemoUser();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Public Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-white">JobPilot <span className="text-indigo-400">AI</span></span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-lg shadow-md shadow-indigo-600/30 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center space-y-8 flex-1 flex flex-col justify-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Presented by Google Cloud for India's Developers</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Your AI-Powered Job Search <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Command Center
          </span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Track every application, generate tailored AI cover letters with Gemini, and never miss a recruiter follow-up with Cloud Scheduler nudges.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/signup"
            className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={handleDemoAccess}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base rounded-xl transition-all"
          >
            Explore Demo Account
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-slate-900/60 border-t border-slate-800 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">Engineered for Developer Applications</h2>
            <p className="text-slate-400 text-sm">Everything you need to optimize your career pipeline with GCP AI services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="p-3 bg-blue-500/10 text-blue-400 w-fit rounded-xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">Application Tracking</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Centralized pipeline management across Applied, Interview, Offer, and Rejected stages.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="p-3 bg-purple-500/10 text-purple-400 w-fit rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">AI Cover Letters</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Google Gemini analyzes Job Descriptions to compose customized outreach letters.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 w-fit rounded-xl">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">Follow-up Emails</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Contextually aware recruiter check-ins generated based on interview stage and timeline.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="p-3 bg-amber-500/10 text-amber-400 w-fit rounded-xl">
                <BellRing className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">Smart Nudges</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Automated reminders powered by GCP Cloud Scheduler to keep applications moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">How JobPilot AI Works</h2>
          <p className="text-slate-400 text-sm">4 simple steps to accelerate your developer career pipeline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <span className="text-4xl font-extrabold text-indigo-500">01</span>
            <h4 className="font-bold text-white">Add Application</h4>
            <p className="text-xs text-slate-400">Input company details and paste the job description.</p>
          </div>
          <div className="text-center space-y-2">
            <span className="text-4xl font-extrabold text-indigo-500">02</span>
            <h4 className="font-bold text-white">AI Personalizes</h4>
            <p className="text-xs text-slate-400">Gemini extracts skills, responsibilities, and drafts letters.</p>
          </div>
          <div className="text-center space-y-2">
            <span className="text-4xl font-extrabold text-indigo-500">03</span>
            <h4 className="font-bold text-white">Track Progress</h4>
            <p className="text-xs text-slate-400">Monitor status history transitions from Applied to Offer.</p>
          </div>
          <div className="text-center space-y-2">
            <span className="text-4xl font-extrabold text-indigo-500">04</span>
            <h4 className="font-bold text-white">Get Nudged</h4>
            <p className="text-xs text-slate-400">Receive timely follow-up reminders via Cloud Scheduler.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-xs text-slate-500 bg-slate-950">
        © 2026 Code Kitchen S01 · JobPilot AI presented by Google Cloud.
      </footer>
    </div>
  );
}
