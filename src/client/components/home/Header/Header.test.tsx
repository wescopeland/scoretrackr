import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { Header } from './Header';

describe('Component: Header', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    // Arrange
    const { container } = render(<Header />);

    // Assert
    expect(container).toBeTruthy();
  });

  describe('Desktop', () => {
    it('displays the app name', () => {
      // Arrange
      render(<Header />);

      // Assert
      expect(screen.getByText('scoretrac.kr', { exact: false })).toBeVisible();
    });

    it('displays some description text', () => {
      // Arrange
      render(<Header />);

      // Assert
      expect(screen.getByText('header.description')).toBeVisible();
    });
  });
});
