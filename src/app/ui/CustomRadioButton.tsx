import React, { useState } from 'react';
import {  Switch } from 'antd';

  

const CustomRadioButton = () => {

  const [isNormal, setIsNormal] = useState(true);

    return (
        <div>
       
       <Switch checkedChildren="Normal" checked={isNormal} unCheckedChildren="Candidate" defaultChecked onChange={setIsNormal}/>
       <div style={{display:isNormal?'none':'block'}}>
        candidates
       </div>
    
        </div>
    );
};

export default CustomRadioButton;