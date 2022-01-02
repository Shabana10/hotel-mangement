import { Container, Grid, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles'

function Contaier() {
    return (

        <>
            <Container maxWidth='sm'>
                <Grid container>
                    <Grid item sx={6} md={6}>
                        <img src='images/room3.jpg' sx={{width: '1' , height: '70%'}}/>
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <Typography variant="h3">
                            Hotel
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Contaier
