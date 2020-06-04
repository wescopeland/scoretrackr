import { Firestore } from '@google-cloud/firestore';
import { credentials } from '@grpc/grpc-js';

export const firestore = new Firestore({
  port: 8080,
  projectId: 'scoretracker-e8845',
  servicePath: 'localhost',
  sslCreds: credentials.createInsecure()
});
