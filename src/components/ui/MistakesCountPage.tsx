'use client';
import style from '../../styles/mistakes.module.css'
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
        <div className={style.mistakes_box}>
          <p>
            {countMistakes} / 3
          </p>
          <ModalGameOverPage open={open} hideModal={hideModal} />
        </div>
    );
};

export default MistakesCountPage;