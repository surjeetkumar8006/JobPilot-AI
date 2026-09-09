/**
 * nudgeRoutes.js - Express Router for Cloud Scheduler Nudges
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/nudgeController');

router.get('/', controller.getNudges);
router.post('/check', controller.checkNudges);

module.exports = router;
