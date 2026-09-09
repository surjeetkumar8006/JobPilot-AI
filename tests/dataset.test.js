/**
 * dataset.test.js - Sample Benchmark Dataset Integrity Tests
 */
const { getSampleJobs, getSampleDrafts } = require('../scripts/importDataset');

describe('JobPilot AI Benchmark Dataset Integrity', () => {
  test('should load at least 10 sample job postings', () => {
    const jobs = getSampleJobs();
    expect(Array.isArray(jobs)).toBe(true);
    expect(jobs.length).toBeGreaterThanOrEqual(10);
  });

  test('every job posting should have required Firestore fields', () => {
    const jobs = getSampleJobs();
    jobs.forEach(job => {
      expect(job.id).toBeDefined();
      expect(job.company).toBeDefined();
      expect(job.role).toBeDefined();
      expect(job.description).toBeDefined();
      expect(Array.isArray(job.requirements)).toBe(true);
    });
  });

  test('should load sample AI drafts', () => {
    const drafts = getSampleDrafts();
    expect(Array.isArray(drafts)).toBe(true);
    expect(drafts.length).toBeGreaterThan(0);
  });
});
