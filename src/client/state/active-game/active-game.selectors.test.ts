import { AppState } from '../reducer';
import {
  selectActiveGameDetails,
  selectIsActiveGameLoading,
  selectIsDesktopSidenavOpen,
  selectIsMobileSidenavOpen
} from './active-game.selectors';

describe('Selectors: activeGame', () => {
  describe('Selector: selectActiveGameDetails', () => {
    it('returns a summary of the active game details from the store', () => {
      // Arrange
      const mockValue = {
        color: 'blue',
        name: 'Intrepid',
        tracks: [
          {
            id: 'trackOne'
          }
        ]
      };

      const mockState: Partial<AppState> = {
        activeGame: mockValue as any
      };

      // Act
      const selected = selectActiveGameDetails(mockState as AppState);

      // Assert
      expect(selected).toEqual(mockValue);
    });
  });

  describe('Selector: selectIsActiveGameLoading', () => {
    it('returns the loading flag value from the store', () => {
      // Arrange
      const mockValue = true;

      const mockState: Partial<AppState> = {
        activeGame: {
          isLoading: mockValue
        } as any
      };

      // Act
      const selected = selectIsActiveGameLoading(mockState as AppState);

      // Assert
      expect(selected).toEqual(mockValue);
    });
  });

  describe('Selector: selectIsDesktopSidenavOpen', () => {
    it('returns the is desktop sidenav open flag value from the store', () => {
      // Arrange
      const mockValue = true;

      const mockState: Partial<AppState> = {
        activeGame: {
          isDesktopSidenavOpen: mockValue
        } as any
      };

      // Act
      const selected = selectIsDesktopSidenavOpen(mockState as AppState);

      // Assert
      expect(selected).toEqual(mockValue);
    });
  });

  describe('Selector: selectIsMobileSidenavOpen', () => {
    it('returns the is mobile sidenav open flag value from the store', () => {
      // Arrange
      const mockValue = true;

      const mockState: Partial<AppState> = {
        activeGame: {
          isMobileSidenavOpen: mockValue
        } as any
      };

      // Act
      const selected = selectIsMobileSidenavOpen(mockState as AppState);

      // Assert
      expect(selected).toEqual(mockValue);
    });
  });
});
