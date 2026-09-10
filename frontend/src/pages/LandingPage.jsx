import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, Briefcase, FileText, Send, BellRing, ArrowRight, 
  CheckCircle2, Cpu, ShieldCheck, Zap, Star, Code, Layers, Terminal
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function LandingPage() {
  const navigate = useNavigate();
  const { loginDemoUser } = useAuth();
  const [activeTab, setActiveTab] = useState('parser');

  const handleDemoAccess = () => {
    loginDemoUser();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden pt-16">
      {/* Background Cyber Constellation Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/landing_bg.jpg')] bg-cover bg-center bg-no-repeat opacity-25 z-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950 z-0 pointer-events-none" />

      {/* Fixed Public Header */}
      <header className="border-b border-slate-800/80 bg-[#0a0f1d]/90 backdrop-blur-xl fixed top-0 left-0 right-0 w-full z-50 h-16">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-800/80 border border-slate-700 text-cyan-400 rounded-xl shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">JobPilot <span className="text-cyan-400">AI</span></span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#demo" className="hover:text-cyan-400 transition-colors">AI Demo</a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a>
            <a href="#tech-stack" className="hover:text-cyan-400 transition-colors">GCP Stack</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm rounded-xl transition-all shadow-none"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center space-y-8 flex-1 flex flex-col justify-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-cyan-300 text-xs font-semibold backdrop-blur-md w-fit mx-auto shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Presented by Google Cloud for India's Working Developers</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Your AI-Powered Job Search <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-300 to-white">
            Command Center
          </span>
        </h1>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Track every application, generate tailored AI cover letters with Gemini, and never miss a recruiter follow-up with Cloud Scheduler nudges.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/signup"
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-base rounded-xl transition-all shadow-none flex items-center justify-center space-x-2"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={handleDemoAccess}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base rounded-xl backdrop-blur-md transition-all shadow-none"
          >
            Explore Demo Account
          </button>
        </div>
      </section>

      {/* Platform Statistics Banner */}
      <section className="border-y border-slate-800/80 bg-[#0a0f1d]/80 py-10 px-6 relative z-10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-white">10,000+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Applications Tracked</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-cyan-400">98.4%</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Gemini Parsing Accuracy</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-indigo-400">3.5x</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Faster Follow-up Responses</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-extrabold text-emerald-400">₹10L</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Code Kitchen Prize Target</div>
          </div>
        </div>
      </section>

      {/* Interactive AI Feature Demo Showcase */}
      <section id="demo" className="py-20 px-6 max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-white">Experience Gemini AI Engine</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            See how Google Gemini transforms raw job descriptions into tailored application responses in seconds.
          </p>
        </div>

        <div className="bg-[#0b101d] border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-center space-x-3 border-b border-slate-800 pb-4">
            <button
              onClick={() => setActiveTab('parser')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'parser'
                  ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Skill Extraction
            </button>
            <button
              onClick={() => setActiveTab('letter')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'letter'
                  ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Cover Letter Generator
            </button>
            <button
              onClick={() => setActiveTab('nudges')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'nudges'
                  ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. Cloud Scheduler Nudges
            </button>
          </div>

          {activeTab === 'parser' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-3 font-mono text-xs text-slate-300">
                <span className="text-slate-500 font-sans block text-[11px] uppercase font-bold">Input Job Description</span>
                <p className="leading-relaxed">
                  "Google Cloud Console team is seeking a Frontend Engineer with 2+ years experience in React, TypeScript, state management, REST APIs, and accessibility..."
                </p>
              </div>

              <div className="bg-slate-900/90 p-5 rounded-xl border border-cyan-500/30 space-y-3">
                <span className="text-cyan-400 font-bold text-xs uppercase flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Gemini AI Extracted Output</span>
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 bg-cyan-950 border border-cyan-800/50 text-cyan-300 rounded-lg text-xs font-bold">React</span>
                  <span className="px-2.5 py-1 bg-cyan-950 border border-cyan-800/50 text-cyan-300 rounded-lg text-xs font-bold">TypeScript</span>
                  <span className="px-2.5 py-1 bg-cyan-950 border border-cyan-800/50 text-cyan-300 rounded-lg text-xs font-bold">GCP Console</span>
                  <span className="px-2.5 py-1 bg-cyan-950 border border-cyan-800/50 text-cyan-300 rounded-lg text-xs font-bold">REST APIs</span>
                </div>
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-white">Experience Level:</span> Intermediate (2+ Years)
                </p>
              </div>
            </div>
          )}

          {activeTab === 'letter' && (
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono space-y-3">
              <span className="text-slate-400 font-sans block text-[11px] uppercase font-bold">Generated AI Cover Letter Draft</span>
              <p className="leading-relaxed text-slate-200">
                Dear Hiring Manager at Google Cloud,
                <br /><br />
                I am writing to express my strong enthusiasm for the Frontend Engineer position. Having built high-performance React and TypeScript applications with strict accessibility standards, I am eager to contribute to Google Cloud Console developer tools...
              </p>
            </div>
          )}

          {activeTab === 'nudges' && (
            <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/30 text-xs space-y-3">
              <div className="flex items-center space-x-2 text-amber-400 font-bold">
                <BellRing className="w-4 h-4" />
                <span>Cloud Scheduler Nudge Triggered</span>
              </div>
              <p className="text-slate-300">
                It's been 5 days since your interview round with Google Cloud. Send a polite check-in note to recruiter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-slate-900/60 border-t border-slate-800/80 px-6 relative z-10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Engineered for Developer Applications</h2>
            <p className="text-slate-400 text-sm">Everything you need to optimize your career pipeline with GCP AI services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0b101d]/90 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 p-6 rounded-2xl space-y-3 transition-all duration-300">
              <div className="p-3 bg-blue-500/10 text-blue-400 w-fit rounded-xl border border-blue-500/20">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">Application Tracking</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Centralized pipeline management across Applied, Interview, Offer, and Rejected stages.
              </p>
            </div>

            <div className="bg-[#0b101d]/90 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 p-6 rounded-2xl space-y-3 transition-all duration-300">
              <div className="p-3 bg-purple-500/10 text-purple-400 w-fit rounded-xl border border-purple-500/20">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">AI Cover Letters</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Google Gemini analyzes Job Descriptions to compose customized outreach letters.
              </p>
            </div>

            <div className="bg-[#0b101d]/90 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 p-6 rounded-2xl space-y-3 transition-all duration-300">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 w-fit rounded-xl border border-emerald-500/20">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-base">Follow-up Emails</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Contextually aware recruiter check-ins generated based on interview stage and timeline.
              </p>
            </div>

            <div className="bg-[#0b101d]/90 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 p-6 rounded-2xl space-y-3 transition-all duration-300">
              <div className="p-3 bg-amber-500/10 text-amber-400 w-fit rounded-xl border border-amber-500/20">
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

      {/* GCP Stack Badges Section */}
      <section id="tech-stack" className="py-20 px-6 max-w-5xl mx-auto space-y-10 relative z-10 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold text-white">Powered by Google Cloud Platform</h2>
          <p className="text-slate-400 text-sm">Enterprise-grade cloud infrastructure ensuring security, scale, and zero downtime.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 bg-[#0b101d] border border-slate-800 rounded-2xl space-y-2">
            <Cpu className="w-7 h-7 text-cyan-400 mx-auto" />
            <h4 className="font-bold text-white text-sm">Google Gemini</h4>
            <p className="text-[11px] text-slate-400">LLM JD Parsing & AI Drafts</p>
          </div>

          <div className="p-5 bg-[#0b101d] border border-slate-800 rounded-2xl space-y-2">
            <Layers className="w-7 h-7 text-indigo-400 mx-auto" />
            <h4 className="font-bold text-white text-sm">Firestore NoSQL</h4>
            <p className="text-[11px] text-slate-400">Document Persistence</p>
          </div>

          <div className="p-5 bg-[#0b101d] border border-slate-800 rounded-2xl space-y-2">
            <Terminal className="w-7 h-7 text-emerald-400 mx-auto" />
            <h4 className="font-bold text-white text-sm">Cloud Run</h4>
            <p className="text-[11px] text-slate-400">Serverless Express Backend</p>
          </div>

          <div className="p-5 bg-[#0b101d] border border-slate-800 rounded-2xl space-y-2">
            <BellRing className="w-7 h-7 text-amber-400 mx-auto" />
            <h4 className="font-bold text-white text-sm">Cloud Scheduler</h4>
            <p className="text-[11px] text-slate-400">Automated Follow-up Nudges</p>
          </div>
        </div>
      </section>

      {/* Testimonials Showcase */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 px-6 relative z-10 backdrop-blur-md">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Loved by Developers across India</h2>
            <p className="text-slate-400 text-sm">What working developers are saying about JobPilot AI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0b101d] border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "Gemini JD skill parsing saved me hours when tailoring cover letters. I secured 3 interview calls in my first week!"
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs">
                <span className="font-bold text-white block">Rahul Sharma</span>
                <span className="text-slate-500">SDE-1 at Microsoft</span>
              </div>
            </div>

            <div className="bg-[#0b101d] border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "The Cloud Scheduler follow-up nudges ensured I never forgot to email recruiters after rounds. Game changer!"
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs">
                <span className="font-bold text-white block">Anjali Goel</span>
                <span className="text-slate-500">Frontend Developer at Swiggy</span>
              </div>
            </div>

            <div className="bg-[#0b101d] border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "The status timeline audit history gave me complete visibility into my application pipeline. Highly recommended!"
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs">
                <span className="font-bold text-white block">Vikram Patel</span>
                <span className="text-slate-500">Backend Engineer at Razorpay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Bottom Call To Action */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <div className="bg-gradient-to-r from-indigo-900/60 via-slate-900 to-purple-900/60 border border-slate-700/80 p-10 rounded-3xl space-y-6 shadow-2xl backdrop-blur-md">
          <h2 className="text-3xl font-extrabold text-white">Ready to Supercharge Your Job Search?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Join thousands of developers using Google Cloud AI to track applications and draft tailored responses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/signup"
              className="px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-base rounded-xl transition-all shadow-none flex items-center justify-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={handleDemoAccess}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base rounded-xl transition-all shadow-none"
            >
              Explore Demo Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-6 text-center text-xs text-slate-500 bg-slate-950 relative z-10">
        © 2026 Code Kitchen S01 · JobPilot AI presented by Google Cloud.
      </footer>
    </div>
  );
}
