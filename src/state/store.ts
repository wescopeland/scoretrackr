import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';

import rootReducer, { AppState } from './reducer';

const configureStore = (preloadedState: AppState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...getDefaultMiddleware())
  );

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
