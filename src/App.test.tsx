import { render } from '@testing-library/react';
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import App from './App';

describe('Component: App', () => {
  xit('renders without crashing', () => {
    const { container } = render(
      <StaticRouter>
        <App />
      </StaticRouter>
    );

    expect(container).toBeTruthy();
  });
});
