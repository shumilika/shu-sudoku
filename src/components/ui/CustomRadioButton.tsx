import React from 'react';
import {  Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setIsCandidate } from '@/store/slices/paramsSlice';

  

const CustomRadioButton = () => {
  const isGameNormal = useSelector((state:RootState)=>state.params.isGameNormal)
  const dispatch = useDispatch()
  
  const handleChange = () =>{
    dispatch(setIsCandidate(!isGameNormal))
  }

    return (
      <div>
        <Switch
            checkedChildren="Normal"
            unCheckedChildren="Candidate"
            defaultChecked
            onChange={handleChange}
            style={{
              backgroundColor: isGameNormal ? '#ad88c6' : '#7469b6',
            }}
        />
      </div>
    );
};

export default CustomRadioButton;