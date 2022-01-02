import { CardActions, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BasicModal from '../MyModal';
import { useSelector } from 'react-redux'
function MyCards() {
    const data = useSelector(state => state.data);
    const filteredData = useSelector(state => state.filteredData);
    console.log(filteredData);
    return (
        <>{
            filteredData == '' ? 
            data.map((e, i) => {
                return <Grid item sm={12} md={4} key={i}>
                    <Card
                        sx={{
                            height: '400px', width: '300px', marginBottom: 2,
                            display: 'flex', flexDirection: 'column'
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                height: '60%'
                            }}
                            image="images/room1.jpg"
                            alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1, height: '50%' }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {e.hotel}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {e.room} rome/s available
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                price per day {e.price}
                            </Typography>
                            <Typography variant='body1'>
                                {e.location}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <BasicModal />
                        </CardActions>
                    </Card>
                </Grid>

            }):
            filteredData.map((e, i) => {
                return <Grid item sm={12} md={4} key={i}>
                    <Card
                        sx={{
                            height: '400px', width: '300px', marginBottom: 2,
                            display: 'flex', flexDirection: 'column'
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                height: '60%'
                            }}
                            image="images/room1.jpg"
                            alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1, height: '50%' }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {e.hotel}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {e.room} rome/s available
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                price per day {e.price}
                            </Typography>
                            <Typography variant='body1'>
                                {e.location}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <BasicModal />
                        </CardActions>
                    </Card>
                </Grid>

            })
        }
        </>
    )
}

export default MyCards
