import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

export default function GenerateButton({ onClick, loading, label = 'Generate with Gemini AI' }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg text-sm font-semibold text-white shadow-md shadow-indigo-600/30 transition-all disabled:opacity-50"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Sparkles className="w-4 h-4" />
      )}
      <span>{loading ? 'Analyzing with Gemini...' : label}</span>
    </button>
  );
}
