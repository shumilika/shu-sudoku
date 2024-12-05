import { Button, Modal } from 'antd';
import React from 'react';
import  style from '../../styles/modulePages.module.css'
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';


interface ModalCongratsProps{
    open:boolean;
    hideModal: () => void;
}

const ModalCongratsPage:React.FC<ModalCongratsProps> = ({open, hideModal}) => {

  const router = useRouter()  
  const time = useSelector((state:RootState)=>state.params.time)
  const level = useSelector((state:RootState)=>state.params.level)

  const handleSubmit = () => {
      hideModal()
      router.push('/')
  }

    return (
      
      <Modal
        title={<p className={style.title_module}>Congrats!</p>}
        open={open}
        closable={false}
        footer={[
            <Button key="submit" type="primary" onClick={handleSubmit}
              className={style.btn_module}
              >
              Play another sudoku
            </Button>
            
          ]}
      >

        <p>You finished an <span className={style.level_module}>{level}</span> puzzle in <span>{time}</span>.</p>

      </Modal>
    
    );
}

export default ModalCongratsPage;