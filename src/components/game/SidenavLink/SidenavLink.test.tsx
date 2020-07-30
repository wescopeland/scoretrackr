import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { SidenavLink } from './SidenavLink';

describe('Component: SidenavLink', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const { container } = render(<SidenavLink label="Link" to="/" />);

    // Assert
    expect(container).toBeTruthy();
  });

  it('displays the given text', () => {
    // Arrange
    render(<SidenavLink label="Link" to="/" />);

    // Assert
    expect(screen.getByText('Link')).toBeVisible();
  });
});
