import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SignIn from '../containers/Signin';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()
  const data = useSelector(state => state.data)
  const signInWithGoogle = () => {
    navigate(`/form`)
    setOpen(false)
  }
  const signInWithFacebook = () => {
    navigate('/form')
    setOpen(false)
  }
  return (
    <div>
      <Button onClick={handleOpen} sx={{color: '#ffccbc', fontWeight: 700,
    backgroundColor:'white', padding: '5px 30px' }}>RESRVE NOW</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <SignIn /> */}
          <h2>Sigin</h2>
          <Button variant='contained' onClick={signInWithGoogle}
          sx={{m: 1}} fullWidth>
            Sign in with Google
          </Button>
          <Button variant='contained' onClick={signInWithFacebook}
          sx={{m: 1}} fullWidth>
            Sign in with Facebook
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
