// src/sudoku-umd.d.ts or types/sudoku-umd.d.ts

declare module 'sudoku-umd' {
    export function generate(difficulty?: string): string;
    export function solve(puzzle: string): string;
    // Add other functions that the library exposes, if any
  }