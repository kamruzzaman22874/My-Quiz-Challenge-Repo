import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet className="w-11/12 mx-auto"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;