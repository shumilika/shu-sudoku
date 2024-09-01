import { PauseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import ModalPausePage from './ModalPausePage';



function StopWatch() {

    const {
        seconds,
        minutes,
        hours,
        pause,
        start,
      } = useStopwatch({ autoStart: true });

      const [open, setOpen] = useState(false);

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

    return (
         <>
      
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      <Button shape="circle" onClick={handlePause}
            icon={<PauseOutlined />}/>
            <ModalPausePage open={open} hideModal={hideModal} resume={start} />
    </>
    );
}

export default StopWatch;