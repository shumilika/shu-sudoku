import { Button, Modal } from 'antd';
import React from 'react';
import style from '../../styles/modulePages.module.css'

interface ModalPauseProps{
    open:boolean;
    hideModal: () => void;
    resume: () => void;
}

const ModalPausePage:React.FC<ModalPauseProps> = ({open, hideModal, resume}) => {

    const handleSubmit = () => {
        hideModal()
        resume()
    }

    return (
        
      
      <Modal
        title={<p className={style.title_module}>Your game has been paused</p>}
        open={open}
        closable={false}
        footer={[
            
            <Button key="submit" type="primary" onClick={handleSubmit}
              className={style.btn_module}
            >
              Resume
            </Button>
          ]}
      >
        
      </Modal>
    
    );
}

export default ModalPausePage;