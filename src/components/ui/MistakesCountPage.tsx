'use client';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import ModalGameOverPage from './ModalGameOver';
import { useCallback, useState } from 'react';
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
        <>
            <p>{countMistakes} / 3</p>
            
            <ModalGameOverPage open={open} hideModal={hideModal}  />
        </>
    );
};

export default MistakesCountPage;