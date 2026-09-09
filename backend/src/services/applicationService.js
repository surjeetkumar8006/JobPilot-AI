/**
 * applicationService.js - Application CRUD & In-Memory/Firestore Operations
 */
const sampleJobs = require('../../../data/sample-jobs.json');

// Local storage fallback store
let applicationsStore = sampleJobs.map(job => ({
  id: job.id,
  company: job.company,
  role: job.role,
  jobDescription: job.description,
  priority: 'High',
  status: 'Applied',
  applicationDate: job.postedDate,
  extractedSkills: job.requirements,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}));

const getAllApplications = async (userId) => {
  return applicationsStore;
};

const getApplicationById = async (userId, id) => {
  return applicationsStore.find(app => app.id === id);
};

const createApplication = async (userId, data) => {
  const newApp = {
    id: `app-${Date.now()}`,
    company: data.company,
    role: data.role,
    jobDescription: data.jobDescription || '',
    priority: data.priority || 'Medium',
    status: data.status || 'Wishlist',
    applicationDate: data.applicationDate || new Date().toISOString().split('T')[0],
    extractedSkills: data.extractedSkills || [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  applicationsStore.unshift(newApp);
  return newApp;
};

const updateApplicationStatus = async (userId, id, newStatus) => {
  const app = applicationsStore.find(a => a.id === id);
  if (app) {
    app.status = newStatus;
    app.updatedAt = new Date().toISOString();
  }
  return app;
};

module.exports = {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplicationStatus
};
