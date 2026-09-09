import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

export default function DraftCard({ draft }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(draft.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <h4 className="font-semibold text-white text-sm">{draft.title || draft.type}</h4>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-medium text-slate-300 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      <div className="bg-slate-950 rounded-lg p-3.5 text-xs text-slate-300 whitespace-pre-wrap font-mono leading-relaxed border border-slate-800/80">
        {draft.content}
      </div>
    </div>
  );
}
