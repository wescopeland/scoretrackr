export const mockFirestoreCollection = (
  collectionData: Array<Record<string, any>>
) => {
  const collection = {
    get: jest.fn().mockReturnValue({
      docs: jest.fn().mockReturnValue([
        {
          data: () => collectionData,
        },
      ]),
    }),
  };

  return collection;
};

export const mockFirestoreReference = (referenceData: Record<string, any>) => {
  const reference = {
    get: jest.fn().mockReturnValue({
      data: () => referenceData,
    }),
  };

  return reference;
};
