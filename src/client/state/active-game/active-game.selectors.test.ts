import { AppState } from '../reducer';
import {
  selectIsDesktopSidenavOpen,
  selectIsMobileSidenavOpen
} from './active-game.selectors';

describe('Selectors: activeGame', () => {
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
