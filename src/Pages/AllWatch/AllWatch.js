import { Container, Grid, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar';
import Product from '../Home/Product';

const AllWatch = () => {
    const [products, setProducts] = useState([]);
    // progress ----------------------------
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
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
                    {
                        products.length
                            ?
                            <Grid container spacing={2}>
                                {
                                    products.map(pd => <Product pd={pd} key={pd._id}></Product>)
                                }
                            </Grid>
                            :
                            <LinearProgress variant="determinate" value={progress} />
                    }
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default AllWatch;