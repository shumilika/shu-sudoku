import { Button, ConfigProvider, Modal } from 'antd';
import React from 'react';
import  style from '../../styles/modulePages.module.css'
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

interface ModalGameOverProps{
    open:boolean;
    hideModal: () => void;
}

const ModalGameOverPage:React.FC<ModalGameOverProps> = ({open, hideModal}) => {

  const router = useRouter()
  const {theme} = useTheme()

    const handleSubmit = () => {
        hideModal()
        router.push('/')
    }

    return (
      <ConfigProvider
      theme={{
       components:{
        Modal:{
          contentBg:theme==='light'?'#ffe6e6':'#2c2c2c',
          headerBg:theme==='light'?'#ffe6e6':'#2c2c2c'
        }
       }
      }}
    > 
      <Modal
        title={<p className={`${theme==='light' ? style.lightTitle : style.darkTitle} ${style.title_module}`}>GAME OVER</p>}
        open={open}
        closable={false}
        footer={[
            
          <Button key="submit" type="primary" onClick={handleSubmit}
            className={`${theme==='light' ? style.btn_light : style.btn_dark}`}
            >
              Back to menu
            </Button>
            
          ]}
      >
        
      </Modal>
      </ConfigProvider>  
    );
}

export default ModalGameOverPage;