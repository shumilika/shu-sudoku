"use client"
import { Input, InputRef } from 'antd'
import React, { useRef, useState } from 'react'
import style from '../../styles/customInput.module.css'
import { useDispatch } from 'react-redux'
import { incrementMistakes } from '@/store/slices/mistakesSlice'
import { updateGameBoard } from '@/store/slices/sudokuSlice'
import CandidateInput from './CandidateInput'
import { useTheme } from 'next-themes'

interface NumericInputProps {
    value: string;
    onChange: (value: string) => void;
    correctvalue: string;
    index: number;
  }
  

const CustomInput = (props: NumericInputProps) => {

  const { value, onChange, correctvalue, index } = props;
  const {theme} = useTheme()
  const inputRef = useRef<InputRef>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [background, setBackground] = useState('inherit')
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([])
  const [isClick, SetIsClick] = useState(false)
  const dispatch = useDispatch()

  const errorColor = theme==='light'?'#D32F2F':'#821e1e'
  const activeColor = theme==='light'?'#E1AFD1':'#6f5667'
  const inputColor = theme==='light'?'#7469B6':'#4A6FA5'
    
  const handleMistake = () => {
    dispatch(incrementMistakes());
  } 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const inputValue = e.target.value.slice(-1)
    const reg = /^\d$/

    if (reg.test(inputValue) || inputValue === '') {
      onChange(inputValue)
      const isCorrect = inputValue === correctvalue
    
      if (!isCorrect && inputValue !== '') {
        setBackground(errorColor)
        handleMistake()
      } else {
        setBackground('inherit')
      }
      inputRef.current?.input?.style.setProperty('cursor', 'default')

      dispatch(updateGameBoard({ index: index, value: inputValue }))
    }
  }

  const handleChangeActive = () =>{
    if(background!==activeColor)setBackground(activeColor)
    SetIsClick(true)
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
    inputRef.current?.input?.style.setProperty('cursor', 'pointer')
  }

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {

    if (wrapperRef.current && !wrapperRef.current.contains(e.relatedTarget)) {
      let valueTemp = value
      if (value.charAt(value.length - 1) === '.' || value === '-') {
        valueTemp = value.slice(0, -1)
      }
      onChange(valueTemp.replace(/0*(\d+)/, '$1'))

      if (background !== errorColor) setBackground('inherit')
      SetIsClick(false)    
    }
  }

  const handleCandidateSelect = (selectedValue: string) => {
    setSelectedCandidates((prev) =>
      prev.includes(selectedValue)
        ? prev.filter((val) => val !== selectedValue)
        : [...prev, selectedValue]
    );
  }

    return (
       
      <div
        ref={wrapperRef}
        className={`${style.wrapper} ${isClick?style.reWrapper:''}`}
        onClick={handleChangeActive}
        onBlur={handleBlur}
        tabIndex={-1}
      >
        {value === "" && (
        
        <CandidateInput
          selectedValues={selectedCandidates}
          onSelect={handleCandidateSelect}
          isDivActive={isClick}
        />
         
      )}
        <Input
        {...props}
        ref={inputRef} 
        onChange={handleChange}
        maxLength={1}
        style={{backgroundColor:background, border:'0',textAlign:'center', height:'inherit',
           borderRadius:'0',caretColor: 'transparent', color:inputColor, fontWeight:'400', fontSize:'32px',
           cursor:'default'
        }}
       className={style.inputStyle}
      />
      
      </div>
    );
      
};

export default CustomInput;