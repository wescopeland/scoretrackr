import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { SidenavLink } from './SidenavLink';

describe('Component: SidenavLink', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const { container } = render(<SidenavLink label="Link" />);

    // Assert
    expect(container).toBeTruthy();
  });

  it('displays the given text', () => {
    // Arrange
    const { getByText } = render(<SidenavLink label="Link" />);

    // Assert
    expect(getByText('Link')).toBeVisible();
  });
});
