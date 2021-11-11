import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [products, setProduct] = useState([]);
    // load all products ---------------------------------
    useEffect(() => {
        fetch('http://localhost:5000/watches')
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
                >Reviews</h1>
                <Grid container spacing={2}>
                    {
                        products.map(pd =>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className="product">
                                    <img src={pd.imgUrl} alt="" />
                                    <h4>{pd.title}</h4>
                                    <p>{pd.price}</p>
                                    <button>Buy Now</button>
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