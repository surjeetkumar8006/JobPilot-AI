/**
 * validation.js - Request Payload Validation Middleware
 */
const validateApplication = (req, res, next) => {
  const { company, role } = req.body;
  if (!company || !role) {
    return res.status(400).json({ error: 'Company and Role fields are required.' });
  }
  next();
};

module.exports = { validateApplication };
