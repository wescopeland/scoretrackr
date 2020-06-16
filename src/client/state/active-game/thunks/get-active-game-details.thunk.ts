import { createAsyncThunk } from '@reduxjs/toolkit';

export const getActiveGameDetails = createAsyncThunk(
  'activeGame/getActiveGameDetails',
  async (friendlyId: string, { rejectWithValue }) => {
    const response = await globalThis.fetch(`/api/game/${friendlyId}`);

    if (!response.ok) {
      return rejectWithValue(response);
    }

    const responseBody = await response.json();
    return responseBody;
  }
);
