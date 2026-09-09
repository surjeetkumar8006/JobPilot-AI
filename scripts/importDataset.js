/**
 * importDataset.js
 * Utility module for reading benchmark job dataset and parsing into Firestore document objects.
 */

const fs = require('fs');
const path = require('path');

function getSampleJobs() {
  const filePath = path.join(__dirname, '../data/sample-jobs.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function getSampleDrafts() {
  const filePath = path.join(__dirname, '../data/sample-drafts.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

module.exports = {
  getSampleJobs,
  getSampleDrafts
};
