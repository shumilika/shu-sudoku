"use client";
import { Row } from 'antd';
import style from './gameBoard.module.css'
import CustomCell from './CustomCell';


interface SectionProps {
    initialSudoku: string;
    solvedSudoku: string; 
  }

const GameBoard:React.FC<SectionProps> = ({initialSudoku, solvedSudoku}) => {

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
              style={style.gridStyle}        
              />
            );
          })}
          </Row>
        ))}

       
      </div>
        
    );
};

export default GameBoard;