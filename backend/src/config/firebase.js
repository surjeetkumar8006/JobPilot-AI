/**
 * firebase.js - Firebase Admin SDK & Firestore Connection Configuration
 */
const admin = require('firebase-admin');

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId: process.env.FIREBASE_PROJECT_ID || 'jobpilot-ai-demo'
    });
  } catch (error) {
    console.warn('⚠️ Firebase Admin initialisation fallback active for local development.');
  }
}

const db = admin.apps.length ? admin.firestore() : null;

module.exports = { admin, db };
