"use client";
import { Input, InputRef } from 'antd';
import React, { useRef, useState } from 'react';
import style from '../../styles/customInput.module.css'
import { useDispatch } from 'react-redux';
import { incrementMistakes } from '@/store/slices/mistakesSlice';
import { updateGameBoard } from '@/store/slices/sudokuSlice';

interface NumericInputProps {
    value: string;
    onChange: (value: string) => void;
    correctvalue: string;
    index: number;
  }
  

const CustomInput = (props: NumericInputProps) => {

  const { value, onChange, correctvalue, index } = props;
  const inputRef = useRef<InputRef>(null);
  const [background, setBackground] = useState('inherit')
  const dispatch = useDispatch()
    
  const handleMistake = () => {
    dispatch(incrementMistakes());
  };
    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const inputValue = e.target.value.slice(-1); 
  

    const reg = /^\d$/;
    if (reg.test(inputValue) || inputValue === '') {
      onChange(inputValue);
      const isCorrect = inputValue === correctvalue;
    
     
      if (!isCorrect && inputValue !== '') {
        setBackground('#D32F2F')
        handleMistake()
      } else {
        setBackground('inherit');
      }

      dispatch(updateGameBoard({ index: index, value: inputValue }))

    }
  };

  const handleChangeActive = () =>{
    setBackground('#E1AFD1')
    if (inputRef.current) {
      inputRef.current.focus(); 
      inputRef.current.select()
    }
    
  }

  
  
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    
    if (background !== '#D32F2F') setBackground('inherit');

    
  };

    return (
       
      <Input
        {...props}
        ref={inputRef} 
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={1}
        onClick={handleChangeActive}
        style={{backgroundColor:background, border:'0',textAlign:'center', height:'inherit',
           borderRadius:'0',caretColor: 'transparent', color:'#7469B6', fontWeight:'400', fontSize:'32px',
           cursor:'pointer'
        }}
       className={style.inputStyle}
      />
       
    );
};

export default CustomInput;