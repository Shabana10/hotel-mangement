import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Container, Grid, Button, MenuItem, Input, TextField, Typography, Box, CardActions } from '@mui/material';
import MyCards from '../components/home/MyCards';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import BasicModal from '../components/MyModal';
import SearchBar from '../components/SearchBar';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffccbc',
    padding: 5,
    marginTop: '-20px',
    borderRadius: 10,
  },
});

function Home() {

  const classes = useStyles()
  // const data = useSelector(state => state.data)
  // const filteredData = useSelector(state => state.filteredData)
  // console.log(filteredData);
  return (
    <>
      {/* ----------Booking Details--------- */}
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={4}>
          <SearchBar />
        </Grid>
      </Container>
      {/* --------Introduction--------- */}
      <Container maxWidth='md'>
        <Grid container>
          <Grid item xs={12} md={10} justify='center' sx={{ m: 10 }}>
            <Typography variant='h6' sx={{ color: 'gray', }}>
              The best experience ever. Would recommended it everyone. We got
              married in Santorini, and stayed at Santorini Resort, and it was
              a dream come true.
            </Typography>
            <Typography variant='body2' disabled>
              PETER DANIEL – TRAVEL MAGAZINE
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/*----------- filter ------------ */}

      <Container maxWidth='lg'>
        <Grid container>

          {/* --------Cards--------- */}
          <MyCards />

        </Grid>
      </Container>
    </>
  )
}

export default Home
