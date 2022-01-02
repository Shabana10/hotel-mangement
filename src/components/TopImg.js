import { Button, Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import BasicModal from './MyModal'


const useStyles = makeStyles({
    contain: {
        width: '100%',
        height: '80vh',
        backgroundImage: 'url(images/hotel.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    mainDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
    },
    
})
function TopImg() {
    const classes = useStyles()
    return (
        <Container maxWidth="xl" className={classes.contain}>
        <Grid container>
          <Grid item sm={12} md={6} className={classes.mainDiv}>
                    <Typography variant='div'>
                        <Typography variant='h2' className='h2'>
                            Spend Quality Holiday with us
                        </Typography>
                        <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas 
                        sed. 
                        </Typography>
                        <BasicModal />
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default TopImg
