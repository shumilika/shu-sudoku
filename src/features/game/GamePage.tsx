"use client";
import React, { useEffect } from 'react';
import GameBoard from '../../components/ui/GameBoard';
import CustomRadioButton from '../../components/ui/CustomRadioButton';
import sudoku from 'sudoku-umd';
import StopWatch from '../../components/ui/StopWatch';
import MistakesCountPage from '@/components/ui/MistakesCountPage';
import { useDispatch } from 'react-redux';
import { generateSolution, setBoards } from '@/store/slices/sudokuSlice';


interface gameProps{
    level: string;
}

const GamePage: React.FC<gameProps> = ({level}) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setBoards(sudoku.generate(level)))
        dispatch(generateSolution())
        
    },[])

   
    return (
        <div>
            <p style={{textAlign:'center'}}>{level}  </p> <StopWatch/>   <MistakesCountPage/>
            <CustomRadioButton/>
            <GameBoard/>
            
            
        </div>
    );
};

export default GamePage;