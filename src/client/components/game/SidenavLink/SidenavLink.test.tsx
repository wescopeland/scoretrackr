import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SidenavLink } from './SidenavLink';

describe('Component: SidenavLink', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const { container } = render(
      <BrowserRouter>
        <SidenavLink label="Link" to="/" />
      </BrowserRouter>
    );

    // Assert
    expect(container).toBeTruthy();
  });

  it('displays the given text', () => {
    // Arrange
    render(
      <BrowserRouter>
        <SidenavLink label="Link" to="/" />
      </BrowserRouter>
    );

    // Assert
    expect(screen.getByText('Link')).toBeVisible();
  });
});
