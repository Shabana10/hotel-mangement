import { Button, FormControl } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
function DisplayFormDetails() {
    const userData = useSelector(state => state.userData)
    const userCredit = useSelector(state => state.userCredit)
    console.log(userData);
    console.log(userCredit);

    
    const sendData = async () => {
        const { firstName, lastName, address, zip, state, country, phone } = userData
        const { cardName, cardNumber, cvv, expDate } = userCredit
        console.log(country);
        const resp = await fetch(
            "https://hotel-management-8ba1e-default-rtdb.firebaseio.com/userform.json",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    address,
                    firstName,
                    lastName,
                    country,
                    state,
                    zip,
                    phone,
                    cardName,
                    cardNumber,
                    expDate,
                    cvv,
                })
            }
        )
    }
    return (
        <div>
            <h1>Display Form Details</h1>
            <FormControl method='POST'>
                <Button onClick={sendData}>Book Now</Button>
            </FormControl>
        </div>
    )
}

export default DisplayFormDetails
