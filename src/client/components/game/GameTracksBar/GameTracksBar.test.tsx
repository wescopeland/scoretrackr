import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import { selectActiveGameState } from 'client/state/active-game';
import { Track } from 'common/models/track.model';
import { GameTracksBar } from './GameTracksBar';

const mockTracks: Track[] = [
  {
    id: 'trackOne',
    name: 'Unpopular Track',
    friendlyId: 'friendlyTrackOne',
    submissionCount: 1
  },
  {
    id: 'trackTwo',
    name: 'Very Popular Track',
    friendlyId: 'friendlyTrackTwo',
    submissionCount: 999
  }
];

describe('Component: GameTracksBar', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          canShowTracksBar: true,
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    const { container } = render(<GameTracksBar isLoading={true} />);

    // Assert
    expect(container).toBeTruthy();
  });

  it('displays a loading skeleton when the loading prop is set to true', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          canShowTracksBar: true,
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    render(<GameTracksBar isLoading={true} />);

    // Assert
    expect(screen.getByTestId('track-tabs-loading')).toBeVisible();
  });

  it('displays the track tabs when the loading prop is set to false', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          canShowTracksBar: true,
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    render(
      <GameTracksBar isLoading={false} gameColor="red" tracks={mockTracks} />
    );

    // Assert
    expect(screen.getByRole('tablist')).toBeVisible();
  });

  it('sorts the track tabs by submission count', () => {
    // Arrange
    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    spyOn(ReactReduxModule, 'useSelector').and.callFake((selector: any) => {
      if (selector === selectActiveGameState) {
        return {
          canShowTracksBar: true,
          isDesktopSidenavOpen: true,
          isMobileSidenavOpen: false
        };
      }
    });

    render(
      <GameTracksBar isLoading={false} gameColor="red" tracks={mockTracks} />
    );

    const tabItems = screen.getAllByRole('tab');
    const firstTab = tabItems[0];
    const secondTab = tabItems[1];

    // Assert
    expect(firstTab).toHaveTextContent('Very Popular Track');
    expect(secondTab).toHaveTextContent('Unpopular Track');
  });
});