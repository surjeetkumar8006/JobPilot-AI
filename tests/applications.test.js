/**
 * applications.test.js - Application Tracking Unit Tests
 */
const applicationService = require('../backend/src/services/applicationService');

describe('JobPilot AI Application Service', () => {
  test('should return list of initial applications', async () => {
    const apps = await applicationService.getAllApplications('user-1');
    expect(Array.isArray(apps)).toBe(true);
    expect(apps.length).toBeGreaterThan(0);
  });

  test('should create a new application', async () => {
    const newApp = await applicationService.createApplication('user-1', {
      company: 'Google Cloud',
      role: 'Frontend Engineer',
      priority: 'High',
      status: 'Applied'
    });
    expect(newApp.company).toBe('Google Cloud');
    expect(newApp.id).toBeDefined();
  });
});
