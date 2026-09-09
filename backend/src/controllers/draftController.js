/**
 * draftController.js - AI Draft Generator & Management Controller
 */
const draftService = require('../services/draftService');
const geminiService = require('../services/geminiService');

const getDrafts = async (req, res, next) => {
  try {
    const drafts = await draftService.getDraftsByApplicationId(req.params.applicationId);
    res.json(drafts);
  } catch (err) {
    next(err);
  }
};

const generateDraft = async (req, res, next) => {
  try {
    const { applicationId, company, role, jobDescription, type } = req.body;
    let content = '';
    
    if (type === 'Cover Letter') {
      content = await geminiService.generateCoverLetter(company, role, jobDescription);
    } else {
      content = `Sample AI generated ${type} content for ${role} at ${company}.`;
    }

    const saved = await draftService.saveDraft({
      applicationId,
      type: type || 'Cover Letter',
      title: `${type || 'Cover Letter'} - ${company}`,
      content
    });

    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getDrafts,
  generateDraft
};
