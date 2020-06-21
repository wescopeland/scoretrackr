import { AppState } from '../reducer';
import {
  selectActiveGameState,
  selectCurrentTrack
} from './active-game.selectors';
import { ActiveGameState } from './models/active-game-state.model';

describe('Selectors: activeGame', () => {
  describe('Selector: selectActiveGameState', () => {
    it('returns the entire active game state', () => {
      // Arrange
      const mockValue: ActiveGameState = {
        canShowTracksBar: true,
        isDesktopSidenavOpen: true,
        isMobileSidenavOpen: false
      };

      const mockState: Partial<AppState> = {
        activeGame: mockValue
      };

      // Act
      const selected = selectActiveGameState(mockState as AppState);

      // Assert
      expect(selected).toEqual(mockValue);
    });
  });

  describe('Selector: selectCurrentTrack', () => {
    it('returns the track id and track friendly id', () => {
      // Arrange
      const mockValue: ActiveGameState = {
        canShowTracksBar: true,
        isDesktopSidenavOpen: true,
        isMobileSidenavOpen: false,
        selectedTrackId: 'mockId',
        selectedTrackFriendlyId: 'mockFriendlyId'
      };

      const mockState: Partial<AppState> = {
        activeGame: mockValue
      };

      // Act
      const selected = selectActiveGameState(mockState as AppState);

      // Assert
      expect(selected).toEqual(mockValue);
    });
  });
});
