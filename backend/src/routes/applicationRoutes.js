/**
 * applicationRoutes.js - Express Router for Applications
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/applicationController');
const { validateApplication } = require('../middleware/validation');

router.get('/', controller.getApplications);
router.post('/', validateApplication, controller.createApplication);
router.get('/:id', controller.getApplication);
router.patch('/:id/status', controller.updateStatus);
router.post('/analyze', controller.analyzeJob);

module.exports = router;
