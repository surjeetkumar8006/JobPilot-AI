/**
 * nudgeController.js - Cloud Scheduler Reminders Controller
 */
const nudgeService = require('../services/nudgeService');

const getNudges = async (req, res, next) => {
  try {
    const nudges = await nudgeService.getPendingNudges();
    res.json(nudges);
  } catch (err) {
    next(err);
  }
};

const checkNudges = async (req, res, next) => {
  try {
    const nudges = await nudgeService.getPendingNudges();
    res.json({ message: 'Cloud Scheduler check completed', activeNudges: nudges.length });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getNudges,
  checkNudges
};
