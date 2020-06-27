import configureStore from './store';

describe('Function: configureStore', () => {
  it('exists', () => {
    expect(configureStore).toBeDefined();
  });

  it('creates an initial store if there is no preloaded state (SSR)', () => {
    // Act
    const store = configureStore();

    // Assert
    expect(store).toBeDefined();
    expect(store.getState().activeGame).toBeDefined();
  });
});
