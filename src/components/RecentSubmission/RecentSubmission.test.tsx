import '@testing-library/jest-dom';
import { cleanup, render, RenderResult } from '@testing-library/react';
import React from 'react';

import { RecentSubmission } from './RecentSubmission';

describe('Component: RecentSubmission', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
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
  });

  afterEach(cleanup);

  it('renders without crashing', () => {
    expect(rendered.container).toBeVisible();
  });

  it('shows the game name text', () => {
    expect(rendered.getByText('Donkey Kong')).toBeVisible();
  });

  it('shows the track name text', () => {
    expect(rendered.getByText('Factory settings')).toBeVisible();
  });

  it('shows the score text as a formatted number', () => {
    expect(rendered.getByText('1,230,000')).toBeVisible();
  });

  it('shows the player name', () => {
    expect(rendered.getByText('Justin Elliott')).toBeVisible();
  });

  it('shows the position as an ordinal number', () => {
    expect(rendered.getByText('3rd')).toBeVisible();
  });
});