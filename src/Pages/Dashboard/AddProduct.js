import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const AddProduct = () => {
    const [parchesInfo, setParchesInfo] = useState({});

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

        // // post parches data ---------------------
        fetch('https://thawing-ravine-64043.herokuapp.com/watches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parchesData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added successfully')
                }
            })

            .catch(error => console.log(error.message))
    }
    return (
        <Container>
            <form onSubmit={handleParchesSubmit}
                style={{ textAlign: 'center', background: 'white', padding: '50px' }}>
                <Typography sx={{ p: 3 }} variant="h4" component="h2">
                    Add Product Now
                </Typography>;
                <TextField
                    id="outlined-password-input"
                    label="title"
                    name="title"
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
                <TextField
                    id="outlined-password-input"
                    label="oldPrice"
                    name="oldPrice"
                    onChange={handleParches}
                    type="text"
                /> <br /><br />
                <TextField
                    id="outlined-password-input"
                    label="imgUrl"
                    name="imgUrl"
                    onChange={handleParches}
                    type="text"
                /> <br /><br />
                <div>
                    <Button type="submit" variant="contained" >Add Product</Button>
                </div>
            </form>
        </Container>
    );
};

export default AddProduct;