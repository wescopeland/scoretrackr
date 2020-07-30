import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import { GameDetailsTrack } from '~/models/game-details-track.model';
import { selectActiveGameState } from '~/state/active-game';
import { GameTracksBar } from './GameTracksBar';

const trackOne: GameDetailsTrack = {
  id: 'trackOne',
  name: 'Unpopular Track',
  friendlyId: 'friendlyTrackOne',
  submissionCount: 1
};

const trackTwo: GameDetailsTrack = {
  id: 'trackTwo',
  name: 'Very Popular Track',
  friendlyId: 'friendlyTrackTwo',
  submissionCount: 999
};

const trackThree: GameDetailsTrack = {
  id: 'trackThree',
  name: 'ZZZ Unpopular Track',
  friendlyId: 'friendlyTrackThree',
  submissionCount: 1
};

const trackFour: GameDetailsTrack = {
  id: 'trackFour',
  name: 'AAA Unpopular Track',
  friendlyId: 'friendlyTrackFour',
  submissionCount: 1
};

const mockTracks = [trackOne, trackTwo, trackThree, trackFour];

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
    expect(firstTab.textContent).toEqual('Very Popular Track');
    expect(secondTab.textContent).toEqual('AAA Unpopular Track');
  });

  it('does secondary sorting of tracks by their name if they have the same submission count', () => {
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
    const thirdTab = tabItems[2];
    const fourthTab = tabItems[3];

    // Assert
    expect(firstTab.textContent).toEqual('Very Popular Track');
    expect(secondTab.textContent).toEqual('AAA Unpopular Track');
    expect(thirdTab.textContent).toEqual('Unpopular Track');
    expect(fourthTab.textContent).toEqual('ZZZ Unpopular Track');
  });
});
