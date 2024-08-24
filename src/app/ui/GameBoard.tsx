import { Col, Row } from 'antd';
import sudoku from 'sudoku-umd';
import style from './gameBoard.module.css'

interface SectionProps {
    level: string; 
  }

const GameBoard:React.FC<SectionProps> = ({level}) => {
   
  let sudokuString = sudoku.generate(level)

  let solve = sudoku.solve(sudokuString)

    return (
        <div className={style.containerStyle}>
        {[...Array(9)].map((_, rowIndex) => (
          <Row gutter={[0, 0]} key={rowIndex}>
             {[...Array(9)].map((_, colIndex) => {
            const cellValue = sudokuString[rowIndex * 9 + colIndex];
            return (
              <Col span={2.67} key={colIndex}>
                <div className={style.gridStyle}>
                  {cellValue === '.' ? '' : cellValue}
                </div>
              </Col>
            );
          })}
          </Row>
        ))}

        {sudokuString}
        <br />
        {solve}
      </div>
        
    );
};

export default GameBoard;