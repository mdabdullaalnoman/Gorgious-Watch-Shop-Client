import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar';
import GoodWatches from './GoodWatches';
import Hero from './Hero';
import './Home.css';
import Products from './Products';
import Review from './Review';
const Home = () => {
    return (
        <div>
            <div id="header-bg">
                <Navbar />
                <Hero />
            </div>
            <div class="homeOther">
                <Products/>
                <Review/>
                <GoodWatches/>
                <Footer />
            </div>
        </div>
    );
};

export default Home;