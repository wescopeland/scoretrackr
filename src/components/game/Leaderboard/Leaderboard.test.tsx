import { Score } from '@prisma/client';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import { firstPlace, secondPlace, thirdPlace } from '~/models/colors';
import { ScoreWithPosition } from '~/models/score-with-position.model';
import { selectActiveGameColor } from '~/state/active-game';
import { Leaderboard } from './Leaderboard';

// Styles are causing an error to be thrown.
// This error is safe to ignore.
console.error = jest.fn();

let mockUseMediaQueryValue = false;

jest.mock('@material-ui/core', () => ({
  ...jest.requireActual('@material-ui/core'),
  useMediaQuery: () => mockUseMediaQueryValue
}));

const createMockScore = (
  position: number,
  finalScore: number
): ScoreWithPosition => {
  return {
    position,
    finalScore,
    id: `${position}-${finalScore}`,
    playerAlias: 'John Smith',
    platform: 'Arcade PCB',
    submittedAt: new Date('2015-05-05')
  };
};

describe('Component: Leaderboard', () => {
  afterEach(cleanup);

  describe('Desktop', () => {
    beforeEach(() => {
      mockUseMediaQueryValue = false;
    });

    it('renders without crashing', () => {
      // Arrange
      const mockScores = [createMockScore(1, 1000)];
      const { container } = render(<Leaderboard scores={mockScores} />);

      // Assert
      expect(container).toBeTruthy();
    });

    it('has a colored background on only the top 10 scores', () => {
      // Arrange
      const mockGameColor = '#aabbcc';
      spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
        if (selector === selectActiveGameColor) {
          return mockGameColor;
        }
      });

      const mockScores = [
        createMockScore(1, 2000),
        createMockScore(2, 1900),
        createMockScore(3, 1800),
        createMockScore(4, 1700),
        createMockScore(5, 1600),
        createMockScore(6, 1500),
        createMockScore(7, 1400),
        createMockScore(8, 1300),
        createMockScore(9, 1200),
        createMockScore(10, 1100),
        createMockScore(11, 1000)
      ];

      render(<Leaderboard scores={mockScores} />);

      const firstRow = screen.getByRole('row', { name: /1 john smith 2,000/i });
      const eleventhRow = screen.getByRole('row', {
        name: /11 john smith 1,000/i
      });

      // Assert
      expect(firstRow).toHaveAttribute('bgcolor', '#aabbcc');
      expect(eleventhRow).not.toHaveAttribute('bgcolor');
    });

    it('does not colorize the row backgrounds if there are not at least 11 scores', () => {
      // Arrange
      spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
        if (selector === selectActiveGameColor) {
          return '#aabbcc';
        }
      });

      const mockScores = [
        createMockScore(1, 2000),
        createMockScore(2, 1900),
        createMockScore(3, 1800),
        createMockScore(4, 1700),
        createMockScore(5, 1600),
        createMockScore(6, 1500),
        createMockScore(7, 1400),
        createMockScore(8, 1300),
        createMockScore(9, 1200),
        createMockScore(10, 1100)
      ];

      render(<Leaderboard scores={mockScores} />);

      const firstRow = screen.getByRole('row', { name: /1 john smith 2,000/i });
      const tenthRow = screen.getByRole('row', {
        name: /10 john smith 1,100/i
      });

      // Assert
      expect(firstRow).not.toHaveAttribute('bgcolor');
      expect(tenthRow).not.toHaveAttribute('bgcolor');
    });
  });

  describe('Mobile', () => {
    beforeEach(() => {
      mockUseMediaQueryValue = true;
    });

    it('renders without crashing', () => {
      // Arrange
      const mockScores = [createMockScore(1, 1000)];
      const { container } = render(<Leaderboard scores={mockScores} />);

      // Assert
      expect(container).toBeTruthy();
    });

    it('renders cards that have an ordinal position, final score, and player alias', () => {
      // Arrange
      const mockScores = [createMockScore(1, 1000)];

      render(<Leaderboard scores={mockScores} />);

      const heading = screen.getByTestId('leaderboard-card-heading');
      const subheading = screen.getByTestId('leaderboard-card-subheading');

      // Assert
      expect(heading).toBeVisible();
      expect(heading).toHaveTextContent('1st – 1,000');

      expect(subheading).toBeVisible();
      expect(subheading).toHaveTextContent('May 5, 2015, John Smith');
    });

    it('applies the correct left border color based on the score position', () => {
      // Arrange
      const mockGameColor = '#aabbcc';
      spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
        if (selector === selectActiveGameColor) {
          return mockGameColor;
        }
      });

      const mockScores = [
        createMockScore(1, 2000),
        createMockScore(2, 1900),
        createMockScore(3, 1800),
        createMockScore(4, 1700),
        createMockScore(5, 1600),
        createMockScore(6, 1500),
        createMockScore(7, 1400),
        createMockScore(8, 1300),
        createMockScore(9, 1200),
        createMockScore(10, 1100),
        createMockScore(11, 1000)
      ];

      render(<Leaderboard scores={mockScores} />);

      const firstPlaceCard = screen.getByTestId('leaderboard-card-1');
      const secondPlaceCard = screen.getByTestId('leaderboard-card-2');
      const thirdPlaceCard = screen.getByTestId('leaderboard-card-3');
      const fourthPlaceCard = screen.getByTestId('leaderboard-card-4');

      // Assert
      expect(firstPlaceCard).toHaveStyle(
        `border-left: 10px solid ${firstPlace}`
      );

      expect(secondPlaceCard).toHaveStyle(
        `border-left: 10px solid ${secondPlace}`
      );

      expect(thirdPlaceCard).toHaveStyle(
        `border-left: 10px solid ${thirdPlace}`
      );

      expect(fourthPlaceCard).toHaveStyle(
        `border-left: 10px solid ${mockGameColor}`
      );
    });
  });
});
