import { Button, Modal } from 'antd';
import React from 'react';
import  style from '../../styles/modulePages.module.css'
import { useRouter } from 'next/navigation';

interface ModalGameOverProps{
    open:boolean;
    hideModal: () => void;
}

const ModalGameOverPage:React.FC<ModalGameOverProps> = ({open, hideModal}) => {

  const router = useRouter()

    const handleSubmit = () => {
        hideModal()
        router.push('/')
    }

    return (
        
      <Modal
        title={<p className={style.title_module}>GAME OVER</p>}
        open={open}
        closable={false}
        footer={[
            
          <Button key="submit" type="primary" onClick={handleSubmit}
            className={style.btn_module}
            >
              Back to menu
            </Button>
            
          ]}
      >
        
      </Modal>
    
    );
}

export default ModalGameOverPage;