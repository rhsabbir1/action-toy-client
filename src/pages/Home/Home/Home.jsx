import React from 'react';
import Banner from '../Banner/Banner';
import Gellary from '../Gellary/Gellary';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gellary></Gellary>
            <Products></Products>
        </div>
    );
};

export default Home;