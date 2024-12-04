"use client";

import React, { useState } from 'react';
import style from '../../styles/candidateInput.module.css'



interface CandidateNumbersProps {
    selectedValues: string[];
    onSelect: (value: string) => void;
    isDivActive: boolean;
  }
  

const CandidateInput:React.FC<CandidateNumbersProps> = ({selectedValues,onSelect,isDivActive}) => {

  const plainOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const handleMouseEnter = (value: string) => {
    setHoveredValue(value);
  };

  const handleMouseLeave = () => {
    setHoveredValue(null);
  };


 
 return (
    <div className={style.candidateBox}>
      {plainOptions.map((option) => (
        <span
          key={option}
          className={`
            ${style.number} 
            ${hoveredValue === option || selectedValues.includes(option)
              ? style.visible
              : ""
            }
            ${isDivActive
              ? ""
              : style.colorOnBlur
            }
          `}
          onMouseEnter={() => handleMouseEnter(option)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onSelect(option)}
        >
          {option}
        </span>
      ))}
    </div>
  );
}

export default CandidateInput;