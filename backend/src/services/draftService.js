/**
 * draftService.js - AI Draft Templates Management
 */
const sampleDrafts = require('../../../data/sample-drafts.json');

let draftsStore = [...sampleDrafts];

const getDraftsByApplicationId = async (applicationId) => {
  return draftsStore.filter(d => d.jobId === applicationId);
};

const saveDraft = async (draftData) => {
  const newDraft = {
    id: `draft-${Date.now()}`,
    jobId: draftData.applicationId,
    type: draftData.type,
    title: draftData.title || `${draftData.type} Draft`,
    content: draftData.content,
    status: 'Draft',
    createdAt: new Date().toISOString()
  };
  draftsStore.unshift(newDraft);
  return newDraft;
};

module.exports = {
  getDraftsByApplicationId,
  saveDraft
};
