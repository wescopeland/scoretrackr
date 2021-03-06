import {
  activeGame,
  activeGameActions,
  initialState
} from './active-game.slice';

describe('Slice: activeGame', () => {
  it('exists', () => {
    // Assert
    expect(activeGame).toBeDefined();
  });

  it('initially has the desktop sidenav open and the mobile sidenav closed', () => {
    // Assert
    expect(initialState.isDesktopSidenavOpen).toEqual(true);
    expect(initialState.isMobileSidenavOpen).toEqual(false);
  });

  it('can set the active game details', () => {
    // Act
    const newState = activeGame.reducer(
      initialState,
      activeGameActions.setGameDetails({
        color: '#aabbcc',
        name: 'Dog Simulator 3000'
      })
    );

    // Assert
    expect(newState.hexColor).toEqual('#aabbcc');
    expect(newState.name).toEqual('Dog Simulator 3000');
  });

  it('can set the currently selected track', () => {
    // Act
    const newState = activeGame.reducer(
      initialState,
      activeGameActions.setSelectedTrack({
        id: 'mockTrackId',
        friendlyId: 'mockTrackFriendlyId'
      })
    );

    // Assert
    expect(newState.selectedTrackId).toEqual('mockTrackId');
    expect(newState.selectedTrackFriendlyId).toEqual('mockTrackFriendlyId');
  });

  it('can toggle whether the desktop sidenav is open', () => {
    // Act
    const newState = activeGame.reducer(
      initialState,
      activeGameActions.toggleIsDesktopSidenavOpen()
    );

    // Assert
    expect(newState.isDesktopSidenavOpen).toEqual(false);
  });

  it('can toggle whether the mobile sidenav is open', () => {
    // Act
    const newState = activeGame.reducer(
      initialState,
      activeGameActions.toggleIsMobileSidenavOpen()
    );

    // Assert
    expect(newState.isMobileSidenavOpen).toEqual(true);
  });
});
