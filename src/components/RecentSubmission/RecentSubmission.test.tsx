import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { RecentSubmission } from './RecentSubmission';

describe('Component: RecentSubmission', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { container } = render(
      <RecentSubmission
        gameColor="#ba3448"
        gameFriendlyId="dkong"
        gameName="Donkey Kong"
        trackName="Factory settings"
        playerAlias="Justin Elliott"
        score={1230000}
        position={3}
      />
    );

    expect(container).toBeVisible();
  });

  it('shows the game name text', () => {
    const { getByText } = render(
      <RecentSubmission
        gameColor="#ba3448"
        gameFriendlyId="dkong"
        gameName="Donkey Kong"
        trackName="Factory settings"
        playerAlias="Justin Elliott"
        score={1230000}
        position={3}
      />
    );

    expect(getByText('Donkey Kong')).toBeVisible();
  });

  it('shows the track name text', () => {
    const { getByText } = render(
      <RecentSubmission
        gameColor="#ba3448"
        gameFriendlyId="dkong"
        gameName="Donkey Kong"
        trackName="Factory settings"
        playerAlias="Justin Elliott"
        score={1230000}
        position={3}
      />
    );

    expect(getByText('Factory settings')).toBeVisible();
  });

  it('shows the score text as a formatted number', () => {
    const { getByText } = render(
      <RecentSubmission
        gameColor="#ba3448"
        gameFriendlyId="dkong"
        gameName="Donkey Kong"
        trackName="Factory settings"
        playerAlias="Justin Elliott"
        score={1230000}
        position={3}
      />
    );

    expect(getByText('1,230,000')).toBeVisible();
  });

  it('shows the player name', () => {
    const { getByText } = render(
      <RecentSubmission
        gameColor="#ba3448"
        gameFriendlyId="dkong"
        gameName="Donkey Kong"
        trackName="Factory settings"
        playerAlias="Justin Elliott"
        score={1230000}
        position={3}
      />
    );

    expect(getByText('Justin Elliott')).toBeVisible();
  });

  it('shows the position as an ordinal number', () => {
    const { getByText } = render(
      <RecentSubmission
        gameColor="#ba3448"
        gameFriendlyId="dkong"
        gameName="Donkey Kong"
        trackName="Factory settings"
        playerAlias="Justin Elliott"
        score={1230000}
        position={3}
      />
    );

    expect(getByText('3rd')).toBeVisible();
  });
});
