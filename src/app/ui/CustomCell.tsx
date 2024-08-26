import { Col } from 'antd';
import React, { useState } from 'react';
import CustomInput from './CustomInput';
import style from './gameBoard.module.css'

interface CustomCellProps {
    cellValue: string; 
    correctValue:string;
}

const CustomCell:React.FC<CustomCellProps> = ({cellValue, correctValue}) => {

  const [value, setValue] = useState('')
  const [background, setBackground] = useState('inherit')

  

    return (
        <Col span={2.67} >
                <div 
                  style={{background:background}}
                 className={style.gridStyle}>
                  {cellValue === '.' ? <CustomInput 
                  correctvalue={correctValue}
                  value={value}
                  onChange={setValue}
                  onChangeBackground={setBackground}
                  /> : cellValue}
                </div>
              </Col>
    );
};

export default CustomCell;