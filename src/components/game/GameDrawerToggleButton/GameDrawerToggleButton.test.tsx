import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as ReactReduxModule from 'react-redux';

import { activeGameActions } from 'client/state/active-game';
import { GameDrawerToggleButton } from './GameDrawerToggleButton';

let mockIsMobileBreakpoint: boolean;

jest.mock('@material-ui/core', () => ({
  ...jest.requireActual('@material-ui/core'),
  useMediaQuery: () => mockIsMobileBreakpoint
}));

describe('Component: GameDrawerToggleButton', () => {
  afterEach(() => {
    cleanup();
    mockIsMobileBreakpoint = false;
  });

  it('renders without crashing', () => {
    // Arrange
    render(
      <GameDrawerToggleButton
        onDesktopClick={jest.fn()}
        onMobileClick={jest.fn()}
        isMobileSidenavOpen={false}
      />
    );

    // Assert
    expect(screen.getByRole('button')).toBeVisible();
  });

  it('given the user is on a desktop breakpoint, calls the desktop click function when clicked', () => {
    // Arrange
    mockIsMobileBreakpoint = false;

    const desktopClickFn = jest.fn();
    const mobileClickFn = jest.fn();

    render(
      <GameDrawerToggleButton
        onDesktopClick={desktopClickFn}
        onMobileClick={mobileClickFn}
        isMobileSidenavOpen={false}
      />
    );

    // Act
    const toggleButton = screen.getByRole('button');
    userEvent.click(toggleButton);

    // Assert
    expect(desktopClickFn).toHaveBeenCalledTimes(1);
    expect(mobileClickFn).toHaveBeenCalledTimes(0);
  });

  it('given the user is on a mobile breakpoint, calls the mobile click function when clicked', () => {
    // Arrange
    mockIsMobileBreakpoint = true;

    const desktopClickFn = jest.fn();
    const mobileClickFn = jest.fn();

    render(
      <GameDrawerToggleButton
        onDesktopClick={desktopClickFn}
        onMobileClick={mobileClickFn}
        isMobileSidenavOpen={false}
      />
    );

    const toggleButton = screen.getByRole('button');

    // Act
    userEvent.click(toggleButton);

    // Assert
    expect(desktopClickFn).toHaveBeenCalledTimes(0);
    expect(mobileClickFn).toHaveBeenCalledTimes(1);
  });

  it('given the mobile sidenav is open and the user switches to a desktop breakpoint, closes the mobile sidenav', () => {
    // Arrange
    mockIsMobileBreakpoint = false; // the user has switched to a desktop breakpoint

    const mockUseDispatch = jest.fn();
    spyOn(ReactReduxModule, 'useDispatch').and.returnValue(mockUseDispatch);

    const desktopClickFn = jest.fn();
    const mobileClickFn = jest.fn();

    render(
      <GameDrawerToggleButton
        onDesktopClick={desktopClickFn}
        onMobileClick={mobileClickFn}
        isMobileSidenavOpen={true}
      />
    );

    // Assert
    expect(mockUseDispatch).toHaveBeenCalledWith(
      activeGameActions.toggleIsMobileSidenavOpen()
    );
  });
});
