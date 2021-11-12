import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Purches = () => {
    const { user } = useAuth();
    const [parchesInfo, setParchesInfo] = useState({});

    const handleParches = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...parchesInfo }
        newUser[field] = value;
        setParchesInfo(newUser);
        console.log(newUser);
    }

    const handleParchesSubmit = () => {

    }

    return (
        <Container>
            <form onSubmit={handleParchesSubmit} style={{ textAlign: 'center' }}>
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
                    id="outlined-password-input"
                    label="Date"
                    name="date"
                    onChange={handleParches}
                    type="text"
                /><br></br><br />
                <TextField
                    id="outlined-password-input"
                    label="Price"
                    name="price"
                    onChange={handleParches}
                    type="text"
                /> <br /><br />


                <Button type="submit" variant="contained">Parches</Button>
            </form>
        </Container>
    );
};

export default Purches;