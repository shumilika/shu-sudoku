import { Button, Modal } from 'antd';
import React from 'react';

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
        title=<p style={{textAlign:'center'}}>Your game has been paused</p>
        open={open}
        closable={false}
        footer={[
            
            <Button key="submit" type="primary" onClick={handleSubmit}>
              Resume
            </Button>
            
          ]}
      >
        
      </Modal>
    
    );
}

export default ModalPausePage;