import { Input } from 'antd';
import React from 'react';

interface NumericInputProps {
    value: string;
    onChange: (value: string) => void;
    correctvalue: string;
    onChangeBackground:(value: string) => void;
    
  }
  

const CustomInput = (props: NumericInputProps) => {

    const { value, onChange, correctvalue, onChangeBackground } = props;

   

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    
  
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
      const isCorrect = inputValue === correctvalue;
      if(isCorrect && inputValue!='') onChangeBackground('green')
        else if(!isCorrect && inputValue!='')  onChangeBackground('red')
      else onChangeBackground('white')
    }
  };

  
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };


    return (
       
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={1}
        style={{backgroundColor:'inherit', border:'0',textAlign:'center'}}
        
      />
       
    );
};

export default CustomInput;