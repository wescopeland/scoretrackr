import { mockFirebaseAdmin } from 'ts-mock-firebase';

const firebaseAdmin = mockFirebaseAdmin();
(firebaseAdmin as any).credential = {
  applicationDefault: (): any => {
    return null;
  }
};

module.exports = firebaseAdmin;
