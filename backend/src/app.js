/**
 * app.js - Express Middleware & Route Mounting Application Entry
 */
const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorHandler');

const applicationRoutes = require('./routes/applicationRoutes');
const draftRoutes = require('./routes/draftRoutes');
const nudgeRoutes = require('./routes/nudgeRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'JobPilot AI Backend API', timestamp: new Date() });
});

// API Routes
app.use('/api/applications', applicationRoutes);
app.use('/api/drafts', draftRoutes);
app.use('/api/nudges', nudgeRoutes);

app.use(errorHandler);

module.exports = app;
