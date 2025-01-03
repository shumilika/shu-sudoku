"use client";
import { Row } from 'antd';
import style from '../../styles/gameBoard.module.css'
import CustomCell from './CustomCell';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect, useState } from 'react';
import ModalCongratsPage from './ModalCongratsPage';
import CelebrationConfetti from './CelebrationConfetti';
import { setPauseTime } from '@/store/slices/paramsSlice';
import { useTheme } from 'next-themes';


const GameBoard:React.FC = () => {

  const solutionBoard = useSelector((state:RootState)=>state.sudoku.solutionBoard)
  const gameBoard = useSelector((state: RootState)=>state.sudoku.gameBoard)
  const solution = useSelector((state:RootState)=>state.sudoku.solution)
  const {theme} = useTheme()
  const [open, setOpen] = useState(false)
  const [isSalut, setIsSalut] = useState(false)
  const dispatch = useDispatch()

  const showModal = () =>{
    setOpen(true)
  }

  const hideModal = () =>{
    setOpen(false)
  }

  const getBorderStyle = (rowIndex: number, colIndex: number) => {
    const classes = [theme==='light'?style.gridStyleLight:style.gridStyleDark];

   if(theme==='light'){
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
   }else if(theme==='dark'){
    if (rowIndex === 0 || rowIndex % 3 === 0) {
      classes.push(style.cellTopDark);
    }
    if (colIndex === 0 || colIndex % 3 === 0) {
      classes.push(style.cellLeftDark);
    }
    if (rowIndex === 8 || (rowIndex + 1) % 3 === 0) {
      classes.push(style.cellBottomDark);
    }
   
    if (colIndex === 8 || (colIndex + 1) % 3 === 0) {
      classes.push(style.cellRightDark);
    }
    if (rowIndex === 0) {
      classes.push(style.outerTopDark);
    }
    if (rowIndex === 8) {
      classes.push(style.outerBottomDark);
    }
    if (colIndex === 0) {
      classes.push(style.outerLeftDark);
    }
    if (colIndex === 8) {
      classes.push(style.outerRightDark);
    }
   } 
   

    return classes.join(' ');
  }

  useEffect(() => {
    const isBoardComplete = gameBoard!=='' && gameBoard === solution;
    if (isBoardComplete) {
      dispatch(setPauseTime(true))
      setIsSalut(true)
      
       setTimeout(()=>{
        showModal()
       },500)
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

       <ModalCongratsPage open={open} hideModal={hideModal} />
       <CelebrationConfetti show={isSalut}/>
      </div>
        
    );
};

export default GameBoard;