import { createAsyncThunk } from '@reduxjs/toolkit';

import { GameDetailsResponse } from 'common/models/game-details-response.model';

export const getActiveGameDetails = createAsyncThunk(
  'activeGame/getActiveGameDetails',
  async (friendlyId: string, { rejectWithValue }) => {
    const response = await globalThis.fetch(`/api/game/${friendlyId}`);

    if (!response.ok) {
      return rejectWithValue(response);
    }

    return (await response.json()) as GameDetailsResponse;
  }
);
