import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware, CombinedState, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { AppState } from './reducer';

const configureStore = (preloadedState?: AppState) => {
  const composeEnhancers = composeWithDevTools({});

  let store: CombinedState<any>;
  if (preloadedState) {
    store = createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(...getDefaultMiddleware()))
    );
  } else {
    store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(...getDefaultMiddleware()))
    );
  }

  return store;
};

export default configureStore;
