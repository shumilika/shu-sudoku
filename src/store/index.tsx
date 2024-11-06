'use client';
import { configureStore } from '@reduxjs/toolkit';
import mistakesReducer from './slices/mistakesSlice';
import sudokuReducer from './slices/sudokuSlice';

const store = configureStore({
  reducer: {
    mistakes: mistakesReducer,
    sudoku: sudokuReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
