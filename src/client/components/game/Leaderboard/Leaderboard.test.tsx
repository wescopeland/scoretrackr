import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import { selectActiveGameColor } from 'client/state/active-game';
import { Score } from 'common/entities';
import { Leaderboard } from './Leaderboard';

const createMockScore = (position: number, finalScore: number): Score => {
  return {
    position,
    finalScore,
    id: `${position}-${finalScore}`,
    playerAlias: 'John Smith',
    platform: 'Arcade PCB',
    submittedAt: new Date('2015-05-05'),
    game: null,
    track: null
  };
};

describe('Component: Leaderboard', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const mockScores = [createMockScore(1, 1000)];
    const { container } = render(<Leaderboard scores={mockScores} />);

    // Assert
    expect(container).toBeTruthy();
  });

  it('has a colored background on only the top 10 scores', () => {
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
