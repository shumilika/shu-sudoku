'use client';
import { configureStore } from '@reduxjs/toolkit';
import mistakesReducer from './slices/mistakesSlice';

const store = configureStore({
  reducer: {
    mistakes: mistakesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
