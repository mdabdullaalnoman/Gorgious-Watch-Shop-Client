import { Container, Grid } from '@mui/material';
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className="hero-warp">
                        <div className="hero">
                            <h1>smart watches</h1>
                            <p>50% <span>OFF ALL WATCHES /</span> DAYS ONLY</p>
                            <h6>USE PROMO CODE</h6>
                            <h4>WL18</h4>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Hero;