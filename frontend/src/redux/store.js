import { configureStore } from '@reduxjs/toolkit';
import resourceReducer from './resourceSlice';

export const store = configureStore({
  reducer: { resources: resourceReducer }
});