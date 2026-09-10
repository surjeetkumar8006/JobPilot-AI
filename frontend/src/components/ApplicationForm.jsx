import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function ApplicationForm({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    jobDescription: '',
    priority: 'High',
    status: 'Applied'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-[#0b101d] border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Add New Job Application</span>
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-xl font-bold">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Company Name *</label>
            <input
              type="text"
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              placeholder="e.g. Google Cloud"
              value={formData.company}
              onChange={e => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Job Role *</label>
            <input
              type="text"
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              placeholder="e.g. Frontend Engineer"
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Job Description (JD) *</label>
            <textarea
              rows={3}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              placeholder="Paste job posting description here for Gemini AI analysis..."
              value={formData.jobDescription}
              onChange={e => setFormData({ ...formData, jobDescription: e.target.value })}
            />
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-slate-700 rounded-xl text-sm font-semibold text-slate-300 hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-white hover:bg-slate-100 rounded-xl text-sm font-semibold text-slate-900 transition-all shadow-none"
            >
              Save Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
