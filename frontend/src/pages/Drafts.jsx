import React, { useState, useEffect } from 'react';
import DraftCard from '../components/DraftCard';
import sampleDrafts from '../../../data/sample-drafts.json';

export default function Drafts() {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    setDrafts(sampleDrafts);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">AI Draft Repository</h1>
        <p className="text-slate-400 text-sm">Access and manage all Gemini AI generated cover letters and outreach templates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {drafts.map(draft => (
          <DraftCard key={draft.id} draft={draft} />
        ))}
      </div>
    </div>
  );
}
