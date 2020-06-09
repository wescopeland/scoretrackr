import * as admin from 'firebase-admin';

const serviceAccount: admin.ServiceAccount = {
  projectId: 'scoretracker-e8845',
  privateKey: process.env.FB_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FB_CLIENT_EMAIL
};

function initializeFirebase() {
  // Jest will initialize its own mock Firebase instance.
  if (!process.env.JEST_WORKER_ID) {
    if (process.env.NODE_ENV === 'development') {
      process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

      admin.initializeApp({
        projectId: 'scoretracker-e8845',
        credential: admin.credential.applicationDefault()
      });
    } else {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://scoretracker-e8845.firebaseio.com'
      });
    }
  }
}

if (!admin.apps.length) {
  initializeFirebase();
}

export const db = process.env.JEST_WORKER_ID
  ? admin
  : admin.apps.length
  ? admin.app()
  : null;
