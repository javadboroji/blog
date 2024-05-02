import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoClose } from "react-icons/io5";

 type modalType={
    modalW?:string,
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
 }


function ModalComponent({modalW,setOpenModal,openModal,children}:modalType) {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: modalW||400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius:'8px'
      };
 
    const handleClose = () => setOpenModal(false);
  return (
    <div>
  
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className='flex w-full justify-end '>
            <Button onClick={handleClose}>
                <IoClose size={18} color='red'/>
            </Button>
        </div>
        {children}
      </Box>
    </Modal>
  </div>
  )
}

export default ModalComponent