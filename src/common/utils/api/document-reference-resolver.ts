import { DocumentData, DocumentReference } from '@google-cloud/firestore';
import { ApolloError } from 'apollo-server';

import { getDocumentDataWithId } from 'common/utils/api/get-document-data-with-id';

/**
 *
 *
 * @template T Type of document being returned in the resolution
 * @param {DocumentData} originalDocument The document that contains a field to be resolved
 * @param {string} refKey The key on the original document that is a Firestore reference
 * @returns {Promise<T>} The resolved document
 *
 * @example
 * ```typescript
 * Score: {
 *   game: (score: DBScore) => documentReferenceResolver<Game>(score, '_gameRef')
 * }
 * ```
 */
export const documentReferenceResolver = async <T>(
  originalDocument: DocumentData,
  refKey: string
): Promise<T> => {
  try {
    // Using a Firestore document that has a reference to
    // another document, get that referenced document.
    const foundDbReferenceDocument = await (originalDocument[
      refKey
    ] as DocumentReference).get();

    // Return the found referenced document, but also
    // add its id onto the object.
    return getDocumentDataWithId<T>(foundDbReferenceDocument);
  } catch (err) {
    throw new ApolloError(err);
  }
};
