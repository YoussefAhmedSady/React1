import React, { useEffect, useState } from 'react';
import imgLogo from "../../Assets/avataaars.svg";
const Home = () => {
    
    return<>
    <div className="main-color d-flex justify-content-center align-items-center vh-100">
        <div className="text-white text-center py-5">
            <img src={imgLogo} alt="logo" className='w-75' />
            <h1 className='fw-bolder mt-3'>START FRAMEWORK</h1>
            <div className="d-flex justify-content-center align-items-center">
            <div className="line me-2"></div>
            <div className="position-relative star "><i className="fa-solid fa-star"></i></div>
            <div className="line ms-2"></div>
            </div>
            <p className='mt-2 fs-4 text-center'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </>
}

export default Home;

