/**
 * applicationController.js - Application REST API Controller
 */
const applicationService = require('../services/applicationService');
const historyService = require('../services/historyService');
const geminiService = require('../services/geminiService');

const getApplications = async (req, res, next) => {
  try {
    const apps = await applicationService.getAllApplications(req.userId);
    res.json(apps);
  } catch (err) {
    next(err);
  }
};

const getApplication = async (req, res, next) => {
  try {
    const app = await applicationService.getApplicationById(req.userId, req.params.id);
    if (!app) return res.status(404).json({ error: 'Application not found' });
    
    const history = await historyService.getStatusHistory(req.params.id);
    res.json({ ...app, history });
  } catch (err) {
    next(err);
  }
};

const createApplication = async (req, res, next) => {
  try {
    const app = await applicationService.createApplication(req.userId, req.body);
    res.status(201).json(app);
  } catch (err) {
    next(err);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const existing = await applicationService.getApplicationById(req.userId, req.params.id);
    if (!existing) return res.status(404).json({ error: 'Application not found' });

    const updated = await applicationService.updateApplicationStatus(req.userId, req.params.id, status);
    await historyService.logStatusChange(req.params.id, existing.status, status);
    
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

const analyzeJob = async (req, res, next) => {
  try {
    const { jobDescription } = req.body;
    const analysis = await geminiService.analyzeJobDescription(jobDescription);
    res.json(analysis);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getApplications,
  getApplication,
  createApplication,
  updateStatus,
  analyzeJob
};
