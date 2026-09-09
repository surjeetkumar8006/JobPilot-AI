/**
 * gemini.js - Google Gemini API Connection Configuration
 */
const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = process.env.GEMINI_API_KEY || 'MOCK_KEY';
const ai = new GoogleGenerativeAI(apiKey);

module.exports = { ai };
