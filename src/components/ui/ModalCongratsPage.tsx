import { Button, Modal } from 'antd';
import React from 'react';
import  '../../styles/pausepage.module.css'
import { useRouter } from 'next/navigation';


interface ModalCongratsProps{
    open:boolean;
    hideModal: () => void;
}

const ModalCongratsPage:React.FC<ModalCongratsProps> = ({open, hideModal}) => {

  const router = useRouter()  

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
        
      </Modal>
    
    );
}

export default ModalCongratsPage;