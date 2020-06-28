import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { EmptyState } from './EmptyState';

describe('Component: EmptyState', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const { container } = render(
      <EmptyState heading="Heading" label="Label" />
    );

    // Assert
    expect(container).toBeTruthy();
  });
});
