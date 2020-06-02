import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
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
      const { getByText } = render(<Header />);

      // Assert
      expect(getByText('scoretrac.kr', { exact: false })).toBeVisible();
    });

    it('displays some description text', () => {
      // Arrange
      const { getByText } = render(<Header />);

      // Assert
      expect(getByText('header.description')).toBeVisible();
    });
  });
});
