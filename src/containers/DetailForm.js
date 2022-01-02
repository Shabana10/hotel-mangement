import * as React from 'react';
import { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '../components/Contaier'
import FormControl from '@mui/material/FormControl'
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../store/actions';

export default function AddressForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  // console.log(userData);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",

  })
  let name, value;

  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value })
  }

  const goNext = async (e) => {
    e.preventDefault()
    dispatch(getdata(user))
    const { firstName, lastName, address, city, state, zip, country, } = user
    if (user) {
      setUser({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      })
      navigate('/credit');

    } else {
      alert("Please fill all the data")
    }
  }
  return (
    <React.Fragment>
      <Container />
      <Box maxWidth='lg'>
        <Box sx={{border: '2px solid gray', borderRadius: 3,
        width: '55%', margin: 5, padding: 3}}>
          <Typography variant="h4" gutterBottom>
            PERSONAL DETAILS
          </Typography>
          <Grid container sx={{display: 'flex' ,
          justifyContent: 'center', aliginItem: 'center'}} >
            <FormControl method='POST'>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="off"
                  variant="standard"
                  value={user.firstName}
                  onChange={getUserData}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="off"
                  variant="standard"
                  value={user.lastName}
                  onChange={getUserData}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="off"
                  variant="standard"
                  value={user.address}
                  onChange={getUserData}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="off"
                  variant="standard"
                  value={user.city}
                  onChange={getUserData}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  id="state"
                  name="state"
                  autoComplete='off'
                  label="State/Province/Region"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="off"
                  variant="standard"
                  value={user.zip}
                  onChange={getUserData}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="off"
                  variant="standard"
                  value={user.country}
                  onChange={getUserData}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  autoComplete="off"
                  variant="standard"
                  value={user.phone}
                  onChange={getUserData}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant='contained' onClick={goNext}
                sx={{m: 5}}>Next</Button>
              </Grid>
            </FormControl>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}