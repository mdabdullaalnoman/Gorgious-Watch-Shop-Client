import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar';

const Purches = () => {
    const { user } = useAuth();
    const date = new Date().toLocaleDateString();
    const [parchesInfo, setParchesInfo] = useState({ name: user.displayName, email: user.email, date: date });

    const handleParches = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...parchesInfo }
        newUser[field] = value;
        setParchesInfo(newUser);
        console.log(newUser);
    }

    const handleParchesSubmit = (e) => {
        e.preventDefault();

        const parchesData = { ...parchesInfo };

        // post parches data ---------------------
        fetch('https://thawing-ravine-64043.herokuapp.com/parches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parchesData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('watch parches successfully')
                }
            })

            .catch(error => console.log(error.message))
    }

    return (
        <div style={{ background: '#17161a' }}>
            <Navbar />
            <Container>
                <form onSubmit={handleParchesSubmit} 
                style={{ textAlign: 'center' ,background:'white', padding:'50px'}}>
                    <Typography sx={{ p: 3 }} variant="h4" component="h2">
                        Parches Now
                    </Typography>;
                    <TextField
                        id="outlined-password-input"
                        label="Name"
                        name="name"
                        onChange={handleParches}
                        defaultValue={user.displayName}
                        type="text"
                    /><br></br><br />
                    <TextField
                        id="outlined-password-input"
                        label="Email"
                        name="email"
                        onChange={handleParches}
                        defaultValue={user.email}
                        type="text"
                    /><br></br><br />
                    <TextField
                        id="outlined-password-input"
                        label="Title"
                        name="title"
                        onChange={handleParches}
                        type="text"
                    /><br></br><br />
                    <TextField
                        disabled
                        id="outlined-password-input"
                        label="Date"
                        name="date"
                        onChange={handleParches}
                        defaultValue={date}
                        type="text"
                    /><br></br><br />
                    <TextField
                        id="outlined-password-input"
                        label="Price"
                        name="price"
                        onChange={handleParches}
                        type="text"
                    /> <br /><br />
                    <div>
                    <Button type="submit" variant="contained" >Parches</Button>
                    </div>
                </form>
            </Container>
            <Footer />
        </ div>
    );
};

export default Purches;