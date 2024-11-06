'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import sudoku from 'sudoku-umd';

interface SudokuState {
  gameBoard: string;
  solutionBoard: string;
  solution:string;
}

const initialState: SudokuState = {
    gameBoard: '',
    solutionBoard: '',
    solution:''
};

const SudokuSlice = createSlice({
  name: 'sudoku',
  initialState,
  reducers: {
    setBoards: (state, action: PayloadAction<string>) => {
        state.gameBoard = action.payload;
        state.solutionBoard = action.payload;
    },

    generateSolution: (state) => {
        const solvedBoard = sudoku.solve(state.solutionBoard);
        if (solvedBoard) {
          state.solution = solvedBoard;
        } else {
          console.error("Невозможно найти решение для текущей доски");
        }
      },
      updateGameBoard: (state, action: PayloadAction<{ index: number; value: string }>) => {
        const { index, value } = action.payload;
        state.gameBoard =
          state.gameBoard.substring(0, index) +
          (value || '.') +
          state.gameBoard.substring(index + 1);
      },
    resetBoard: (state) => {
        state.gameBoard = initialState.gameBoard;
        state.solutionBoard = initialState.solutionBoard;
        state.solution = initialState.solution;
    },
  },
});

export const { setBoards, generateSolution, resetBoard, updateGameBoard } = SudokuSlice.actions;
export default SudokuSlice.reducer;
