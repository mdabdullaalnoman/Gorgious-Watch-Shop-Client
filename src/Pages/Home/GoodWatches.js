import { Container, Grid } from '@mui/material';
import React from 'react';
import './GoodWatch.css';

const GoodWatches = () => {
    return (
        <div class="good-watches-warp">
            <Container>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} md={6}>
                        <div class="good-watch-content">
                            <h1>OUR GOOD WATCHES IS...</h1>
                            <p>With 24/7 live streaming, a versatile magnetic stand, person alerts with Nest Aware and one app for all your Nest products, Nest Cam helps you keep an eye on what matters. From anywhere.</p>
                            <button>learn more</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.imgur.com/nAgPoKn.jpg" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
};

export default GoodWatches;