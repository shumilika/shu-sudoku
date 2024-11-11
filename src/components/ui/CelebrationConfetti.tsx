"use client";
import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const CelebrationConfetti: React.FC<{ show: boolean }> = ({ show }) => {
    const { width, height } = useWindowSize();

    if (!show) return null; 

    return <Confetti 
    width={width} 
    height={height} 
    colors={['#E1AFD1', '#7469B6', '#AD88C6', '#FFE6E6']} 
    numberOfPieces={1000}
    
    />;
};

export default CelebrationConfetti;