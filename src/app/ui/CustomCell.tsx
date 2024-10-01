import { Col } from 'antd';
import React, { useState } from 'react';
import CustomInput from './CustomInput';

interface CustomCellProps {
    cellValue: string; 
    correctValue:string;
    style:string;
}

const CustomCell:React.FC<CustomCellProps> = ({cellValue, correctValue,style}) => {

  const [value, setValue] = useState('')


    return (
        <Col span={2.67} >
                <div className={style}>
                  {cellValue === '.' ? <CustomInput 
                  correctvalue={correctValue}
                  value={value}
                  onChange={setValue}
                  /> : cellValue}
                </div>
              </Col>
    );
};

export default CustomCell;