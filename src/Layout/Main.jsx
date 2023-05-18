import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/shard/Navber/Navber';
import Footer from '../pages/shard/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;