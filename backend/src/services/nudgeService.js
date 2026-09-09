/**
 * nudgeService.js - Cloud Scheduler Follow-up Reminders Service
 */
const getPendingNudges = async () => {
  return [
    {
      id: 'nudge-1',
      applicationId: 'job-001',
      company: 'Google Cloud',
      role: 'Frontend Engineer',
      type: 'Post-Interview Follow Up',
      dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      status: 'Pending'
    },
    {
      id: 'nudge-2',
      applicationId: 'job-002',
      company: 'Razorpay',
      role: 'Backend Engineer',
      type: 'Recruiter Check-In',
      dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
      status: 'Scheduled'
    }
  ];
};

module.exports = {
  getPendingNudges
};
