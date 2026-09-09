/**
 * draftRoutes.js - Express Router for AI Drafts
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/draftController');

router.get('/application/:applicationId', controller.getDrafts);
router.post('/generate', controller.generateDraft);

module.exports = router;
