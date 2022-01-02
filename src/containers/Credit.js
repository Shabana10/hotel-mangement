import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { getcredit } from '../store/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function PaymentForm() {
  const [userCredit, setUserCredit] = useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const credit = useSelector(state => state.userCredit)

  let name, value;

  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserCredit({ ...userCredit, [name]: value })

  }

  const displayData = async (e) => {
    e.preventDefault()
    dispatch(getcredit(userCredit))
   const {cardName,cardNumber ,expDate ,cvv,} = userCredit
        if (userCredit) {
        setUserCredit({
          cardName,
          cardNumber,
          expDate,
          cvv,
        })

        navigate('/formdetails');
      
    } else {
      alert("Please fill all the data")
    }

  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <FormControl method='POST'>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="off"
              variant="standard"
              name="cardName"
              vlaue={userCredit.cardName}
              onChange={getUserData}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="off"
              variant="standard"
              name="cardNumber"
              vlaue={userCredit.cardNumber}
              onChange={getUserData}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="off"
              variant="standard"
              name="expDate"
              vlaue={userCredit.expDate}
              onChange={getUserData}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="off"
              variant="standard"
              name="cvv"
              vlaue={userCredit.cvv}
              onChange={getUserData}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant='contained' onClick={displayData}>Done</Button>
          </Grid>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}