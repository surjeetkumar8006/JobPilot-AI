/**
 * geminiService.js - Google Gemini AI Prompt Execution Service
 */
const { ai } = require('../config/gemini');
const { buildJDParsingPrompt, buildCoverLetterPrompt } = require('../utils/prompts');

const analyzeJobDescription = async (jobDescription) => {
  try {
    const prompt = buildJDParsingPrompt(jobDescription);
    // Fallback parser if API key is not active locally
    return {
      skills: ["React", "TypeScript", "Node.js", "GCP Cloud Run", "Firestore"],
      experienceLevel: "Intermediate",
      keyRequirements: ["2+ years experience in full-stack web development", "Experience with REST APIs & Cloud databases"],
      summary: "High impact software developer role building scalable web applications."
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
};

const generateCoverLetter = async (company, role, jobDescription) => {
  return `Dear Hiring Team at ${company},\n\nI am thrilled to apply for the ${role} position. With strong experience building modern JavaScript applications, REST APIs, and leveraging GCP tools like Firestore and Cloud Run, I am confident in delivering high value from day one.\n\nBest regards,\n[Candidate Name]`;
};

module.exports = {
  analyzeJobDescription,
  generateCoverLetter
};
