import * as admin from 'firebase-admin';

process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

export let db: admin.app.App;

function initializeFirebaseAdminApp() {
  admin.initializeApp({
    projectId: 'scoretracker-e8845',
    credential: admin.credential.applicationDefault()
  });
}

// Jest will initialize its own mock Firebase instance.
if (!process.env.JEST_WORKER_ID) {
  initializeFirebaseAdminApp();
  db = admin.apps.length ? admin.app() : null;
} else {
  // This sorcery is what it takes to get unit tests working properly.
  db = admin as any;
}
