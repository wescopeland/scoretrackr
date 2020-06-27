import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware, CombinedState, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { AppState } from './reducer';

const configureStore = () => {
  const composeEnhancers = composeWithDevTools({});

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...getDefaultMiddleware()))
  );
};

export default configureStore;
