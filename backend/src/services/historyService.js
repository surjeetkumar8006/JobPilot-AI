/**
 * historyService.js - Application Status History Tracking
 */
let historyStore = [];

const logStatusChange = async (applicationId, fromStatus, toStatus) => {
  const record = {
    id: `history-${Date.now()}`,
    applicationId,
    from: fromStatus,
    to: toStatus,
    changedAt: new Date().toISOString()
  };
  historyStore.push(record);
  return record;
};

const getStatusHistory = async (applicationId) => {
  return historyStore.filter(h => h.applicationId === applicationId);
};

module.exports = {
  logStatusChange,
  getStatusHistory
};
