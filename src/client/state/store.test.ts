import { AppState } from './reducer';
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

  it('creates the initial store given some preloaded state from the server render (CSR)', () => {
    // Arrange
    const preloadedState: Partial<AppState> = {
      activeGame: {
        canShowTracksBar: true,
        isDesktopSidenavOpen: true,
        isMobileSidenavOpen: false
      }
    };

    // Act
    const store = configureStore(preloadedState as AppState);

    // Assert
    expect(store).toBeDefined();
    expect(store.getState().activeGame).toBeDefined();
    expect(store.getState().activeGame.isMobileSidenavOpen).toEqual(false);
  });
});
