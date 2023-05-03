import React from 'react';
import { Outlet } from 'react-router-dom';
import Chefs from '../Pages/Chefs/Chefs';
import Footer from '../Pages/shared/Footer/Footer';
import Header from '../Pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Chefs></Chefs>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;