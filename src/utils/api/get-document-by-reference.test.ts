/**
 * @jest-environment node
 */

import { DocumentReference } from '@google-cloud/firestore';

import { firestore } from 'server/firebase-admin-app';
import { getDocumentByReference } from './get-document-by-reference';

describe('Util: getDocumentByReference', () => {
  it('exists', () => {
    // Assert
    expect(getDocumentByReference).toBeDefined();
  });

  it('given a reference, retrieves its real document', async () => {
    // Arrange
    const ref: DocumentReference = firestore
      .collection('someCollection')
      .doc('asdf');

    spyOn(ref, 'get').and.returnValue({
      data: () => ({ foo: 'bar' })
    });

    // Act
    const document = await getDocumentByReference(ref);

    // Assert
    expect(document).toEqual({ foo: 'bar' });
  });
});
