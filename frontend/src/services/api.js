const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchApplications = async () => {
  const res = await fetch(`${API_BASE}/applications`);
  return res.json();
};

export const fetchApplicationById = async (id) => {
  const res = await fetch(`${API_BASE}/applications/${id}`);
  return res.json();
};

export const createApplication = async (data) => {
  const res = await fetch(`${API_BASE}/applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const updateApplicationStatus = async (id, status) => {
  const res = await fetch(`${API_BASE}/applications/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });
  return res.json();
};

export const generateAIDraft = async (draftData) => {
  const res = await fetch(`${API_BASE}/drafts/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(draftData)
  });
  return res.json();
};

export const fetchNudges = async () => {
  const res = await fetch(`${API_BASE}/nudges`);
  return res.json();
};
