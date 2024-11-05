"use client";
import React from 'react';
import GameBoard from '../../components/ui/GameBoard';
import CustomRadioButton from '../../components/ui/CustomRadioButton';
import sudoku from 'sudoku-umd';
import StopWatch from '../../components/ui/StopWatch';
import { useSelector } from 'react-redux';
import { RootState } from '../../store'

interface gameProps{
    level: string;
}

const GamePage: React.FC<gameProps> = ({level}) => {

    const initialSudoku:string = sudoku.generate(level)
    const solvedSudoku:string = sudoku.solve(initialSudoku)
    const countMistakes = useSelector((state:RootState)=>state.mistakes.count)
   

    return (
        <div>
            <p style={{textAlign:'center'}}>{level}   <StopWatch/>   mistakes {countMistakes}/3</p>
            <CustomRadioButton/>
            <GameBoard initialSudoku={initialSudoku} solvedSudoku={solvedSudoku} />
            
            
        </div>
    );
};

export default GamePage;