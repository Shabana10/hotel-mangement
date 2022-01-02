import { Button, Box } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from './firebase-config'

function Signin() {
    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleAuthProvider)
    }
    return (
        <Box sx={{width: '50%'}}>
            <Button variant='contained'
            onClick={signInWithGoogle}>
                Sign in with Google
            </Button>
        </Box>
    )
}

export default Signin
