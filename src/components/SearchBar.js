import { Grid, TextField, Button } from '@mui/material'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {filterdata} from '../store/actions'

  
function SearchBar() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const filteredData = useSelector(state => state.filteredData)
    
    const [location, setLocation] = useState()
    const [hotel, setHotel] = useState()
    
    const locations= ["Location","Karachi", "Lahore", "Islamabad", "Peshawar", "Sialkot"];
    const hotels = ["Hotel","Hotel-1", "Hotel-2", "Hotel-3", "Hotel-4", "Hotel-5"]

    const getDetails = (hotel, location) => {
       
        const filteredRoom = data.filter((ele) => {
              return ele.hotel === hotel && ele.location === location
            })
            dispatch(filterdata(filteredRoom))
            
    }
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    select
                    fullWidth
                    onChange={(e) => setLocation(e.target.value)}
                    SelectProps={{
                        native: true,
                    }}
                    variant="standard"
                >
                    {locations.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="standard-select-currency-native"
                    select
                    fullWidth
                    onChange={(e) => setHotel(e.target.value)}
                    SelectProps={{
                        native: true,
                    }}
                    variant="standard"
                >
                    {hotels.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Button variant='contained'
                    onClick={() => getDetails(hotel, location)}
                    sx={{ backgroundColor: '#3e2723' }}>CHECK AVAILABILTY</Button>
            </Grid>
        </>
    )
}

export default SearchBar
