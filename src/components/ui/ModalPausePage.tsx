import { Button, ConfigProvider, Modal } from 'antd';
import React from 'react';
import style from '../../styles/modulePages.module.css'
import { useTheme } from 'next-themes';

interface ModalPauseProps{
    open:boolean;
    hideModal: () => void;
    resume: () => void;
}

const ModalPausePage:React.FC<ModalPauseProps> = ({open, hideModal, resume}) => {

  const {theme} = useTheme()

    const handleSubmit = () => {
        hideModal()
        resume()
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
        title={<p className={`${theme==='light' ? style.lightTitle : style.darkTitle} ${style.title_module}`}>Your game has been paused</p>}
        open={open}
        closable={false}
        footer={[
            
            <Button key="submit" type="primary" onClick={handleSubmit}
            className={`${theme==='light' ? style.btn_light : style.btn_dark}`}
            >
              Resume
            </Button>
          ]}
      >
        
      </Modal>
    </ConfigProvider>
    );
}

export default ModalPausePage;