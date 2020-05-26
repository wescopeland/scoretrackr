import * as admin from "firebase-admin";

process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";

// We don't want firebase to initialize more than once.
// istanbul ignore else
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: "scoretracker-e8845",
    credential: admin.credential.applicationDefault(),
  });
}

export const firebaseAdminApp = admin.app();
