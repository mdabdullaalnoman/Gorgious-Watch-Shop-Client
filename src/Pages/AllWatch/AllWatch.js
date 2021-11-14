import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar';
import Product from '../Home/Product';

const AllWatch = () => {
    const [products, setProducts] = useState([]);
    // load all watches data --------------------------------------
    useEffect(() => {
        fetch('https://thawing-ravine-64043.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setProducts(data))

            .catch(error => console.log(error.message))
    }, []);
    return (
        <div>
            <Navbar />
            <div
                style={{
                    background: 'black', padding: '5rem 0'
                }}>
                <Container>
                    <h1
                        style={{ textAlign: 'center', color: 'white', paddingBottom: '4rem', fontSize: '4rem' }}
                    >All Watches</h1>
                    <Grid container spacing={2}>
                        {
                            products.map(pd => <Product pd={pd} key={pd._id}></Product>)
                        }
                    </Grid>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default AllWatch;