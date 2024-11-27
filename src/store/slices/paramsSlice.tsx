'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ParamsState {
  time:string,
  level:string,
  timeIsPause:boolean,
}

const initialState: ParamsState = {
    time:'',
    level:'',
    timeIsPause:false,
};

const ParamsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<string>) => {
        state.level = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) => {
        state.time = action.payload;
    },
    setPauseTime: (state, action:PayloadAction<boolean>) => {
        state.timeIsPause = action.payload;
    },

    resetParams: (state) => {
        state.time = initialState.time;
        state.level = initialState.level;
    },
  },
});

export const { setLevel, setTime, setPauseTime, resetParams } = ParamsSlice.actions;
export default ParamsSlice.reducer;
