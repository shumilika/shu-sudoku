"use client";
import React, { useEffect } from 'react';
import GameBoard from '../../components/ui/GameBoard';
import sudoku from 'sudoku-umd';
import StopWatch from '../../components/ui/StopWatch';
import MistakesCountPage from '@/components/ui/MistakesCountPage';
import { useDispatch } from 'react-redux';
import { generateSolution, setBoards } from '@/store/slices/sudokuSlice';
import { setLevel } from '@/store/slices/paramsSlice';
import styles from '../../styles/gamePage.module.css'


interface gameProps{
    level: string;
}

const GamePage: React.FC<gameProps> = ({level}) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setBoards(sudoku.generate(level)))
        dispatch(generateSolution())
        dispatch(setLevel(level))
        
    },[])

   
    return (
      <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Shu Sudoku</h1>
        <p className={styles.subtitle}>{level==='very-hard'?'EXPERT':level.toUpperCase()} LEVEL</p>
      </header>

      <div className={styles.statusContainer}>
        <StopWatch />
        <MistakesCountPage />
      </div>

      <main className={styles.main}>
        <GameBoard />
      </main>
    </div>
    );
};

export default GamePage;