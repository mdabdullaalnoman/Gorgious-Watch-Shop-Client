import { Grid } from '@mui/material';
import React from 'react';
import './Product.css';
const Product = ({ pd }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className="product">
                <img src={pd.imgUrl} alt="" />
                <h4>{pd.title}</h4>
                <p>{pd.price}</p>
                <button>Buy Now</button>

            </div>
        </Grid>
    );
};

export default Product;