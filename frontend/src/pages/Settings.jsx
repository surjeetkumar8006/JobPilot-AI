import React from 'react';

export default function Settings() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings & Integration</h1>
        <p className="text-slate-400 text-sm">Configure Google Cloud, Firebase, and Gemini API credentials.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-white">Google Gemini API Key</h3>
          <p className="text-xs text-slate-400 mb-2">Used for local LLM job parsing and cover letter generation.</p>
          <input
            type="password"
            placeholder="AIzaSy..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Firestore Project ID</h3>
          <p className="text-xs text-slate-400 mb-2">Google Cloud Firestore Project Identifier.</p>
          <input
            type="text"
            defaultValue="jobpilot-ai-demo"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
