import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProduct] = useState([]);
    // load all products ---------------------------------
    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => {
                const firstSix = data.slice(1 , 7);
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
                style={{textAlign:'center' ,color:'white' , paddingBottom:'4rem',fontSize:'4rem'}}
                >New Arrivals</h1>
                <Grid container spacing={2}>
                    {
                        products.map(pd => <Product pd={pd} key={pd._id}></Product>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Products;