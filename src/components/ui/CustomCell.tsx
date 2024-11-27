'use client';
import { Col } from 'antd';
import React, { useState } from 'react';
import CustomInput from './CustomInput';

interface CustomCellProps {
    cellValue: string; 
    correctValue:string;
    style:string;
    index: number;
}

const CustomCell:React.FC<CustomCellProps> = ({cellValue, correctValue,style,index}) => {

  const [value, setValue] = useState('')

  return (
    <Col span={2.67} >
            <div className={style}>
              {cellValue === '.' ?
                <CustomInput 
              correctvalue={correctValue}
              value={value}
              onChange={setValue}
              index={index}
              />
              
               : <p>{cellValue}</p>}
            </div>
          </Col>
  )
   
};

export default CustomCell;