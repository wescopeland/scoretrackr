import { getMostRecentSubmissions } from './get-most-recent-submissions.thunk';

globalThis.fetch = Object.create(jest.fn());

describe('Thunk: getMostRecentSubmissions', () => {
  it('exists', () => {
    // Assert
    expect(getMostRecentSubmissions).toBeDefined();
  });

  it('makes a request to get the most recent submissions from the server', async () => {
    // Arrange
    const fetchSpy = spyOn(globalThis, 'fetch');

    // Act
    await getMostRecentSubmissions()(jest.fn(), jest.fn(), null);

    // Assert
    expect(fetchSpy).toHaveBeenCalledWith('/api/submissions/recent');
  });

  it('fulfills with the response body if the response status is a 200', async () => {
    // Arrange
    spyOn(globalThis, 'fetch').and.returnValue({
      ok: true,
      status: 200,
      json: () => ({ status: 'SUCCESS' })
    });

    // Act
    const nextAction = await getMostRecentSubmissions()(
      jest.fn(),
      jest.fn(),
      null
    );

    // Assert
    expect(nextAction.type).toEqual(getMostRecentSubmissions.fulfilled.type);
    expect(nextAction.payload).toEqual({ status: 'SUCCESS' });
  });

  it('rejects with the entire response if the response status is not a 200', async () => {
    // Arrange
    const mockResponse = {
      ok: false,
      status: 500
    };

    spyOn(globalThis, 'fetch').and.returnValue(mockResponse);

    // Act
    const nextAction = await getMostRecentSubmissions()(
      jest.fn(),
      jest.fn(),
      null
    );

    // Assert
    expect(nextAction.type).toEqual(getMostRecentSubmissions.rejected.type);
    expect(nextAction.payload).toEqual(mockResponse);
  });
});
