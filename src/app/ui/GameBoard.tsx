"use client";
import { Row } from 'antd';
import style from './gameBoard.module.css'
import CustomCell from './CustomCell';


interface SectionProps {
    initialSudoku: string;
    solvedSudoku: string; 
  }

const GameBoard:React.FC<SectionProps> = ({initialSudoku, solvedSudoku}) => {

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
  };


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