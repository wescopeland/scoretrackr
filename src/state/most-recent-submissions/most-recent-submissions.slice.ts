import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const mostRecentSubmissions = createSlice({
  name: 'mostRecentSubmissions',
  initialState,
  reducers: {},
  extraReducers: {}
});

export const mostRecentSubmissionsActions = mostRecentSubmissions.actions;
