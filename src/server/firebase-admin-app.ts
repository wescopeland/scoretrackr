import * as admin from 'firebase-admin';

process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

export let db: admin.app.App;

function initializeDevFirebaseAdminApp() {
  admin.initializeApp({
    projectId: 'scoretracker-e8845',
    credential: admin.credential.applicationDefault()
  });
}

function initializeProdFirebaseAdminApp() {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(
        Buffer.from(process.env.GOOGLE_CONFIG_BASE64, 'base64').toString(
          'ascii'
        )
      )
    ),
    databaseURL: 'https://scoretracker-e8845.firebaseio.com'
  });
}

// Jest will initialize its own mock Firebase instance.
if (!process.env.JEST_WORKER_ID) {
  if (
    !process.env.GOOGLE_CONFIG_BASE64 ||
    process.env.NODE_ENV === 'development'
  ) {
    initializeDevFirebaseAdminApp();
  } else {
    initializeProdFirebaseAdminApp();
  }

  db = admin.apps.length ? admin.app() : null;
} else {
  // This sorcery is what it takes to get unit tests working properly.
  db = admin as any;
}
