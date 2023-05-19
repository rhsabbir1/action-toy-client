import React from 'react';
import Banner from '../Banner/Banner';
import Gellary from '../Gellary/Gellary';
import Products from '../Products/Products';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gellary></Gellary>
            <ShopByCategory></ShopByCategory>
            <Products></Products>
        </div>
    );
};

export default Home;