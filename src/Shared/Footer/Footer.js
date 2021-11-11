import { Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div class="footer-warp">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <img src="https://i.imgur.com/FqnN3dJ.png" alt="" />
                        <p>Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin eleifend rhoncus. Mauris</p>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <h2>QUICK LINKS</h2>
                        <Link to="/">search</Link><br></br>
                        <Link to="/">Help</Link><br></br>
                        <Link to="/">Information</Link><br></br>
                        <Link to="/">Privacy Policy</Link><br></br>
                        <Link to="/">Shipping Details</Link><br></br>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <h2>CUSTOMER SERVICE</h2>
                        <Link to="/">Contract Us</Link><br></br>
                        <Link to="/">About Us</Link><br></br>
                        <Link to="/">Careers</Link><br></br>
                        <Link to="/">Refunds & Returns</Link><br></br>
                        <Link to="/">Deliveries</Link><br></br>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <h2>header</h2>
                        <Link to="/">No: 58 A, East Madison Street , Dhaka 1200</Link><br></br>
                        <Link to="/">Phone: +567789766</Link><br></br>
                        <Link to="/">Email: support@gmail.com</Link><br></br>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;