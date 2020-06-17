import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { GamePicker } from './GamePicker';

describe('Component: GamePicker', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const { container } = render(
      <GamePicker isLoading={false} gameName={'Game X'} gameColor={'red'} />
    );

    // Assert
    expect(container).toBeVisible();
  });

  describe('Hydrated', () => {
    it('renders the first letter of the game name', () => {
      // Arrange
      const { getByTestId } = render(
        <GamePicker isLoading={false} gameName={'Game X'} gameColor={'red'} />
      );

      // Assert
      expect(getByTestId('game-identifier').textContent).toEqual('G');
    });

    it('renders the whole game name', () => {
      // Arrange
      const { getByText } = render(
        <GamePicker isLoading={false} gameName={'Game X'} gameColor={'red'} />
      );

      // Assert
      expect(getByText('Game X')).toBeVisible();
    });
  });
});
