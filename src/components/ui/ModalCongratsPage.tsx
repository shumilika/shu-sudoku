import { Button, ConfigProvider, Modal } from 'antd';
import React from 'react';
import  style from '../../styles/modulePages.module.css'
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useTheme } from 'next-themes';

interface ModalCongratsProps{
    open:boolean;
    hideModal: () => void;
}

const ModalCongratsPage:React.FC<ModalCongratsProps> = ({open, hideModal}) => {

  const router = useRouter()  
  const time = useSelector((state:RootState)=>state.params.time)
  const level = useSelector((state:RootState)=>state.params.level)
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
        title={<p className={`${theme==='light' ? style.lightTitle : style.darkTitle} ${style.title_module}`}>Congrats!</p>}
        open={open}
        closable={false}
        footer={[
            <Button key="submit" type="primary" onClick={handleSubmit}
              className={`${theme==='light' ? style.btn_light : style.btn_dark}`}
              >
              Play another sudoku
            </Button>
            
          ]}
      >

        <p className={`${theme==='light' ? style.level_light : style.level_dark}`}>You finished an <span>{level}</span> puzzle in <span>{time}</span>.</p>

      </Modal>
      </ConfigProvider>
    
    );
}

export default ModalCongratsPage;