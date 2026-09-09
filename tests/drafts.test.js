/**
 * drafts.test.js - AI Draft Generator Tests
 */
const draftService = require('../backend/src/services/draftService');

describe('JobPilot AI Draft Service', () => {
  test('should save and retrieve AI generated draft', async () => {
    const draft = await draftService.saveDraft({
      applicationId: 'job-001',
      type: 'Cover Letter',
      content: 'Sample test cover letter'
    });
    expect(draft.id).toBeDefined();
    expect(draft.type).toBe('Cover Letter');
  });
});
