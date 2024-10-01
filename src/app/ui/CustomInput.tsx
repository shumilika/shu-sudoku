import { Input, InputRef } from 'antd';
import React, { useRef, useState } from 'react';
import style from './customInput.module.css'

interface NumericInputProps {
    value: string;
    onChange: (value: string) => void;
    correctvalue: string;
  }
  

const CustomInput = (props: NumericInputProps) => {

  const { value, onChange, correctvalue } = props;
  const inputRef = useRef<InputRef>(null);
  const [background, setBackground] = useState('inherit')
    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const inputValue = e.target.value.slice(-1); 

    const reg = /^\d$/;
    if (reg.test(inputValue) || inputValue === '') {
      onChange(inputValue);
      const isCorrect = inputValue === correctvalue;

      if (!isCorrect && inputValue !== '') {
        setBackground('red');
      } else {
        setBackground('inherit');
      }
    }
  };

  const handleChangeActive = () =>{
    setBackground('orange')
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
    if (background !== 'red') setBackground('inherit');
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
           borderRadius:'0',caretColor: 'transparent', color:'darkblue', fontWeight:'700', fontSize:'22px',
        }}
       className={style.inputStyle}
      />
       
    );
};

export default CustomInput;