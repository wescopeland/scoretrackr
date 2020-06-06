import { DocumentReference } from '@google-cloud/firestore';

export async function getDocumentByReference<T>(
  reference: DocumentReference<T>
) {
  const snapshot = await reference.get();
  return snapshot.data();
}
