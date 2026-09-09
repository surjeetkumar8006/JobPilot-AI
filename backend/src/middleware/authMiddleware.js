/**
 * authMiddleware.js - User Authentication Scoping Middleware
 */
module.exports = (req, res, next) => {
  req.userId = req.headers['x-user-id'] || 'demo-user-123';
  next();
};
