import { Container, Grid, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProduct] = useState([]);
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

    // load all products ---------------------------------
    useEffect(() => {
        fetch('https://thawing-ravine-64043.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => {
                const firstSix = data.slice(1, 7);
                setProduct(firstSix);
            })

            .catch(error => console.log(error.message))
    }, []);

    // const products = {

    // }
    return (
        <div
            style={{
                background: 'black', padding: '5rem 0'
            }}>
            <Container>
                <h1
                    style={{ textAlign: 'center', color: 'white', paddingBottom: '4rem', fontSize: '4rem' }}
                >New Arrivals</h1>

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
    );
};

export default Products;