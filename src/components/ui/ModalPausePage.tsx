import { Button, Modal } from 'antd';
import React from 'react';
import  '../../styles/pausepage.module.css'

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
        title={<p 
          style={{textAlign:'center',color: '#AD88C6', fontSize: '1.5rem', margin: 0 }}
          >Your game has been paused</p>}
        open={open}
        closable={false}
        footer={[
            
            <Button key="submit" type="primary" onClick={handleSubmit}
            style={{
              backgroundColor: '#AD88C6', 
              borderColor: '#AD88C6',
              fontWeight: 'bold'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#914EAD'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#AD88C6'}
        
            >
              Resume
            </Button>
            
          ]}

       
      >
        
      </Modal>
    
    );
}

export default ModalPausePage;