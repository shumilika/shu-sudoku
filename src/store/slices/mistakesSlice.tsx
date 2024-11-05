
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MistakesState {
  count: number;
}

const initialState: MistakesState = {
  count: 0,
};

const mistakesSlice = createSlice({
  name: 'mistakes',
  initialState,
  reducers: {
    incrementMistakes: (state) => {
      state.count += 1;
    },
    resetMistakes: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementMistakes, resetMistakes } = mistakesSlice.actions;
export default mistakesSlice.reducer;
