import { AppState } from '../reducer';
import {
  selectGameColor,
  selectGameName,
  selectIsActiveGameLoading,
  selectIsDesktopSidenavOpen,
  selectIsMobileSidenavOpen
} from './active-game.selectors';

describe('Selectors: activeGame', () => {
  describe('Selector: selectGameColor', () => {
    it('returns the color value from the store', () => {
      // Arrange
      const mockValue = 'red';

      const mockState: Partial<AppState> = {
        activeGame: {
          color: mockValue
        } as any
      };

      // Act
      const selected = selectGameColor(mockState as AppState);

      // Assert
      expect(selected).toEqual(mockValue);
    });
  });

  describe('Selector: selectGameName', () => {
    it('returns the game name value from the store', () => {
      // Arrange
      const mockValue = 'Galaga';

      const mockState: Partial<AppState> = {
        activeGame: {
          name: mockValue
        } as any
      };

      // Act
      const selected = selectGameName(mockState as AppState);

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
