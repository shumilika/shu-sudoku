"use client";
import React, { useState } from 'react';
import GameBoard from './GameBoard';
import CustomRadioButton from './CustomRadioButton';
import sudoku from 'sudoku-umd';
import { Button } from 'antd';
import { PauseOutlined } from '@ant-design/icons';
import StopWatch from './StopWatch';
import ModalPausePage from './ModalPausePage';

interface gameProps{
    level: string;
}

const GamePage: React.FC<gameProps> = ({level}) => {

    const [countMistakes, setCountMistakes] = useState(0)
    const initialSudoku:string = sudoku.generate(level)
    const solvedSudoku:string = sudoku.solve(initialSudoku)
   

    return (
        <div>
            <p style={{textAlign:'center'}}>{level}   <StopWatch/>   mistakes {countMistakes}/3</p>
           
            <GameBoard initialSudoku={initialSudoku} solvedSudoku={solvedSudoku} />
            <CustomRadioButton/>
            
        </div>
    );
};

export default GamePage;