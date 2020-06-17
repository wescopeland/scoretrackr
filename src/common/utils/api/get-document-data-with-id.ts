import { DocumentData } from '@google-cloud/firestore';

export const getDocumentDataWithId = <T>(
  firestoreDocument: DocumentData
): T | undefined => {
  const documentData: T | undefined = firestoreDocument.data();

  if (documentData) {
    return {
      ...documentData,
      id: firestoreDocument.id
    };
  }

  return undefined;
};
