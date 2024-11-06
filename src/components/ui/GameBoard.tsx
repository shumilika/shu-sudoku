"use client";
import { Row } from 'antd';
import style from '../../styles/gameBoard.module.css'
import CustomCell from './CustomCell';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect } from 'react';




const GameBoard:React.FC = () => {


  const solutionBoard = useSelector((state:RootState)=>state.sudoku.solutionBoard)
  const gameBoard = useSelector((state: RootState)=>state.sudoku.gameBoard)
  const solution = useSelector((state:RootState)=>state.sudoku.solution)

  const getBorderStyle = (rowIndex: number, colIndex: number) => {
    const classes = [style.gridStyle];

    
    if (rowIndex === 0 || rowIndex % 3 === 0) {
      classes.push(style.cellTop);
    }
    if (colIndex === 0 || colIndex % 3 === 0) {
      classes.push(style.cellLeft);
    }
    if (rowIndex === 8 || (rowIndex + 1) % 3 === 0) {
      classes.push(style.cellBottom);
    }
   
    if (colIndex === 8 || (colIndex + 1) % 3 === 0) {
      classes.push(style.cellRight);
    }
    if (rowIndex === 0) {
      classes.push(style.outerTop);
    }
    if (rowIndex === 8) {
      classes.push(style.outerBottom);
    }
    if (colIndex === 0) {
      classes.push(style.outerLeft);
    }
    if (colIndex === 8) {
      classes.push(style.outerRight);
    }

    return classes.join(' ');
  }

  useEffect(() => {
    const isBoardComplete = !gameBoard.includes('.') && gameBoard === solution;
    if (isBoardComplete) {
        alert("Ура");
    }
}, [gameBoard,solution]);
  

    return (
        <div className={style.containerStyle}>
        {[...Array(9)].map((_, rowIndex) => (
          <Row gutter={[0, 0]} key={rowIndex}>
             {[...Array(9)].map((_, colIndex) => {
            const index = rowIndex * 9 + colIndex;
            const cellValue = solutionBoard[index]
            const correctValue = solution[index]
            return (
              <CustomCell
              key={colIndex}
              index={index}
              cellValue={cellValue}   
              correctValue={correctValue} 
              style={getBorderStyle(rowIndex, colIndex)}     
              />
            );
          })}
          </Row>
        ))}

       
      </div>
        
    );
};

export default GameBoard;