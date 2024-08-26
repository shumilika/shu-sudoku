"use client";
import { Row } from 'antd';
import sudoku from 'sudoku-umd';
import style from './gameBoard.module.css'
import CustomCell from './CustomCell';


interface SectionProps {
    level: string; 
  }

const GameBoard:React.FC<SectionProps> = ({level}) => {


   
  let initialSudoku:string = sudoku.generate(level)
  let solvedSudoku:string = sudoku.solve(initialSudoku)

 

    return (
        <div className={style.containerStyle}>
        {[...Array(9)].map((_, rowIndex) => (
          <Row gutter={[0, 0]} key={rowIndex}>
             {[...Array(9)].map((_, colIndex) => {
            const index = rowIndex * 9 + colIndex;
            const cellValue = initialSudoku[index]
            const correctValue = solvedSudoku[index]
            return (
              <CustomCell
              key={colIndex}
              cellValue={cellValue}   
              correctValue={correctValue}          
              />
            );
          })}
          </Row>
        ))}

        {initialSudoku}
        <br />
        {solvedSudoku}
      </div>
        
    );
};

export default GameBoard;