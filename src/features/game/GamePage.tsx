"use client";
import React, { useEffect } from 'react';
import GameBoard from '../../components/ui/GameBoard';
import CustomRadioButton from '../../components/ui/CustomRadioButton';
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
           <p className={styles.subtitle}>{level.toUpperCase()} LEVEL</p>
           <StopWatch />
         </header>
   
         <div className={styles.statusContainer}>
           <MistakesCountPage />
           <CustomRadioButton />
         </div>
   
         <main className={styles.main}>
           <GameBoard />
         </main>
       </div>
    );
};

export default GamePage;