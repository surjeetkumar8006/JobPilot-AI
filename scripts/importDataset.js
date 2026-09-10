/**
 * importDataset.js
 * Dataset Importer & Foreign Key Relational Validator for Code Kitchen Benchmark Evaluation.
 */

const fs = require('fs');
const path = require('path');

function validateAndImportDataset() {
  console.log('🔍 Validating JobPilot AI Benchmark Dataset...');

  const jobsPath = path.join(__dirname, '../data/sample-jobs.json');
  const draftsPath = path.join(__dirname, '../data/sample-drafts.json');

  if (!fs.existsSync(jobsPath) || !fs.existsSync(draftsPath)) {
    throw new Error('❌ Dataset files missing in data/ directory!');
  }

  const jobs = JSON.parse(fs.readFileSync(jobsPath, 'utf8'));
  const drafts = JSON.parse(fs.readFileSync(draftsPath, 'utf8'));

  // 1. Schema Validation for Jobs
  const validJobIds = new Set();
  jobs.forEach((job, index) => {
    if (!job.id || !job.company || !job.role || !job.description) {
      throw new Error(`❌ Schema Validation Error in Job at index ${index}: Missing required fields.`);
    }
    validJobIds.add(job.id);
  });

  console.log(`✅ Validated ${jobs.length} Job Postings Schema.`);

  // 2. Relational Integrity Validation for Drafts (Foreign Key Check: draft.jobId -> job.id)
  const linkedDrafts = [];
  const orphanedDrafts = [];

  drafts.forEach((draft, index) => {
    if (!draft.id || !draft.jobId || !draft.type || !draft.content) {
      throw new Error(`❌ Schema Validation Error in Draft at index ${index}: Missing required fields.`);
    }

    if (!validJobIds.has(draft.jobId)) {
      orphanedDrafts.push(draft);
      console.warn(`⚠️ Relational Warning: Draft [${draft.id}] references non-existent jobId: '${draft.jobId}'`);
    } else {
      linkedDrafts.push(draft);
    }
  });

  if (orphanedDrafts.length > 0) {
    console.error(`❌ Validation Failed: Found ${orphanedDrafts.length} orphaned drafts with invalid foreign keys!`);
  } else {
    console.log(`✅ Relational Integrity Passed! All ${linkedDrafts.length} drafts correctly linked to target Job IDs.`);
  }

  return {
    jobsCount: jobs.length,
    draftsCount: drafts.length,
    linkedDraftsCount: linkedDrafts.length,
    orphanedDraftsCount: orphanedDrafts.length
  };
}

module.exports = {
  validateAndImportDataset
};

if (require.main === module) {
  try {
    const report = validateAndImportDataset();
    console.log('\n📊 Import Dataset Report:', report);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
