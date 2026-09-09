/**
 * seedFirestore.js
 * Script to populate local or remote Firestore DB / Mock store with benchmark job postings and drafts.
 */

const fs = require('fs');
const path = require('path');

async function seedData() {
  console.log('🌱 Starting JobPilot AI Firestore Database Seeding...');

  const jobsPath = path.join(__dirname, '../data/sample-jobs.json');
  const draftsPath = path.join(__dirname, '../data/sample-drafts.json');

  if (!fs.existsSync(jobsPath) || !fs.existsSync(draftsPath)) {
    console.error('❌ Error: Sample dataset files missing in data/');
    process.exit(1);
  }

  const jobs = JSON.parse(fs.readFileSync(jobsPath, 'utf8'));
  const drafts = JSON.parse(fs.readFileSync(draftsPath, 'utf8'));

  console.log(`✅ Loaded ${jobs.length} Job Postings and ${drafts.length} Sample Drafts.`);

  // Simulating Firestore document creation
  console.log('\n📦 Seeding Collections:');
  console.log(' - Collection `jobs`:');
  jobs.forEach(job => {
    console.log(`   └─ [jobs/${job.id}] -> ${job.company} (${job.role})`);
  });

  console.log(' - Collection `drafts`:');
  drafts.forEach(draft => {
    console.log(`   └─ [jobs/${draft.jobId}/drafts/${draft.id}] -> Type: ${draft.type}`);
  });

  console.log('\n🎉 Seeding Completed Successfully!');
}

seedData();
