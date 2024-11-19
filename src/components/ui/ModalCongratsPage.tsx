import { Button, Modal } from 'antd';
import React from 'react';
import  '../../styles/pausepage.module.css'
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
        title={<p 
          style={{textAlign:'center',color: '#AD88C6', fontSize: '1.5rem', margin: 0 }}
          >Congrats!</p>}
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
              Play another sudoku
            </Button>
            
          ]}
      >

        <p>You finished an <span style={{fontWeight:'600'}}>{level}</span> puzzle in <span>{time}</span>.</p>

      </Modal>
    
    );
}

export default ModalCongratsPage;