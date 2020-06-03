// import * as admin from 'firebase-admin';

// admin.initializeApp({
//   projectId: 'scoretracker-e8845',
//   credential: admin.credential.applicationDefault()
// });

// export const firebaseAdminApp = admin.app();
// export const firestore = firebaseAdminApp.firestore();

import { Firestore } from '@google-cloud/firestore';
import { credentials } from '@grpc/grpc-js';

export const firestore = new Firestore({
  port: 8080,
  projectId: 'scoretracker-e8845',
  servicePath: 'localhost',
  sslCreds: credentials.createInsecure()
});
