import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return<>
    <Navbar/>
    <div className="">
        <Outlet></Outlet>
    </div>
  <Footer/>
    </>
}

export default Layout;
