import { Input } from 'antd';
import React, { useState } from 'react';

interface NumericInputProps {
    value: string;
    onChange: (value: string) => void;
    correctvalue: string;
  }
  

const CustomInput = (props: NumericInputProps) => {

    const { value, onChange, correctvalue } = props;

    const [background, setBackground] = useState('inherit')
    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
      const isCorrect = inputValue === correctvalue;
     
      if(!isCorrect && inputValue!='')  
        setBackground('red')
       
      else setBackground('inherit')
    }
  };

  const handleChangeActive = () =>{
    setBackground('orange')
  }

  
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    setBackground('inherit')
  };


    return (
       
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={1}
        onClick={handleChangeActive}
        style={{backgroundColor:background, border:'0',textAlign:'center', height:'inherit',
           borderRadius:'0',caretColor: 'transparent', color:'darkblue', fontWeight:'600'}}
       
      />
       
    );
};

export default CustomInput;