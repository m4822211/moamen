import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axiosConfig';

export const fetchResources = createAsyncThunk('resources/fetchAll', async () => {
  const response = await api.get('/resources');
  return response.data;
});

const resourceSlice = createSlice({
  name: 'resources',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResources.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchResources.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchResources.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default resourceSlice.reducer;