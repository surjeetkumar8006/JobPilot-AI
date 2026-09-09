/**
 * server.js - Backend Server Listener
 */
require('dotenv').config();
const app = require('./app');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`🚀 JobPilot AI Server listening on port ${PORT}`);
});
