'use client';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import ModalGameOverPage from './ModalGameOver';
import { useState } from 'react';
import { resetMistakes } from '@/store/slices/mistakesSlice';

const MistakesCountPage:React.FC = () => {

    const countMistakes = useSelector((state:RootState)=>state.mistakes.count)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()


    const showModal = () => {
        setOpen(true)
    };
  
    const hideModal = () => {
          setOpen(false)
          dispatch(resetMistakes())
    };

  

    if (countMistakes>3 && !open) { showModal() }

    return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ffe6e6',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p style={{ margin: 0, fontSize: '1.1rem', color: '#d32f2f' }}>
            {countMistakes} / 3
          </p>
          <ModalGameOverPage open={open} hideModal={hideModal} />
        </div>
    );
};

export default MistakesCountPage;