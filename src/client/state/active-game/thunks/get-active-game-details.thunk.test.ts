import { getActiveGameDetails } from './get-active-game-details.thunk';

globalThis.fetch = Object.create(jest.fn());

describe('Thunk: getActiveGameDetails', () => {
  it('exists', () => {
    // Assert
    expect(getActiveGameDetails).toBeDefined();
  });

  it('makes a request to get the active game details by friendly id from the server', async () => {
    // Arrange
    const fetchSpy = spyOn(globalThis, 'fetch');

    // Act
    await getActiveGameDetails('dkongjr')(jest.fn(), jest.fn(), null);

    // Assert
    expect(fetchSpy).toHaveBeenCalledWith('/api/game/dkongjr');
  });

  it('fulfills with the response body if the response status is a 200', async () => {
    // Arrange
    spyOn(globalThis, 'fetch').and.returnValue({
      ok: true,
      status: 200,
      json: () => ({})
    });

    // Act
    const nextAction = await getActiveGameDetails('dkongjr')(
      jest.fn(),
      jest.fn(),
      null
    );

    // Assert
    expect(nextAction.type).toEqual(getActiveGameDetails.fulfilled.type);
    expect(nextAction.payload).toEqual({});
  });

  it('rejects with the entire response if the response status is not a 200', async () => {
    // Arrange
    const mockResponse = {
      ok: false,
      status: 500
    };

    spyOn(globalThis, 'fetch').and.returnValue(mockResponse);

    // Act
    const nextAction = await getActiveGameDetails('dkongjr')(
      jest.fn(),
      jest.fn(),
      null
    );

    // Assert
    expect(nextAction.type).toEqual(getActiveGameDetails.rejected.type);
    expect(nextAction.payload).toEqual(mockResponse);
  });
});
