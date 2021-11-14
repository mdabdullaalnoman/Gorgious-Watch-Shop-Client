import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [products, setProducts] = useState([]);
    // load all products ---------------------------------
    useEffect(() => {
        fetch('https://thawing-ravine-64043.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setProducts(data))

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
                >Reviews</h1>
                <Grid container spacing={2}>
                    {
                        products.map(pd =>
                            <Grid key={pd._id} item xs={12} sm={6} md={4}>
                                <div className="product">
                                    <img src={pd.photoUrl} alt="" />
                                    <h4>{pd.description}</h4>
                                    <p> Rating: {pd.rate}</p>
                                </div>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Review;