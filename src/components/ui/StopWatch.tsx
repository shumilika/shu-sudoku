import { PauseOutlined } from '@ant-design/icons';
import style from '../../styles/stopWatch.module.css'
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import ModalPausePage from './ModalPausePage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setTime } from '@/store/slices/paramsSlice';
import usePageVisibility from '@/hooks/usePageVisibility';




function StopWatch() {

    const {
        seconds,
        minutes,
        hours,
        pause,
        start,
      } = useStopwatch({ autoStart: true });

    const [open, setOpen] = useState(false);
    const timeIsPause = useSelector((state:RootState)=>state.params.timeIsPause)
    const dispatch = useDispatch()

    const showModal = () => {
        setOpen(true);
    };
  
    const hideModal = () => {
          setOpen(false);
    };

    const handlePause = () => {
      pause()
      showModal()
    }

    usePageVisibility(handlePause)

    useEffect(()=>{
      if(timeIsPause) {
        pause()
        dispatch(setTime(hours+':'+minutes+':'+seconds))
      }
    },[timeIsPause])

    return (
      
       <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent:'center' }}>
       <span style={{ fontSize: '1.2rem', color: '#7469b6',  }}>
         {hours}:{minutes}:{seconds}
       </span>
       <Button
         shape="circle"
         onClick={handlePause}
         icon={<PauseOutlined />}
         className={style.pause_btn}
       />
       <ModalPausePage open={open} hideModal={hideModal} resume={start} />
     </div>
    );
}

export default StopWatch;