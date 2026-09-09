/**
 * prompts.js - Gemini AI Prompt Templates
 */
const buildJDParsingPrompt = (jobDescription) => `
You are an expert AI Career Coach. Analyze the following Job Description (JD) and extract key information:

Job Description:
${jobDescription}

Return JSON with format:
{
  "skills": ["Skill1", "Skill2"],
  "experienceLevel": "Entry-Level | Intermediate | Senior",
  "keyRequirements": ["Req1", "Req2"],
  "summary": "Short 2-sentence summary of role"
}
`;

const buildCoverLetterPrompt = (company, role, jobDescription) => `
Write a compelling, professional cover letter for a ${role} position at ${company}.
Highlight relevant backend/frontend skills, GCP tools, and passion for the product. Keep it under 250 words.

Job Description:
${jobDescription}
`;

const buildNudgePrompt = (company, role, status, daysElapsed) => `
Generate a polite, professional follow-up email draft to send to the recruiter at ${company} for the ${role} position.
Current Status: ${status}. Days since last update: ${daysElapsed}.
`;

module.exports = {
  buildJDParsingPrompt,
  buildCoverLetterPrompt,
  buildNudgePrompt
};
