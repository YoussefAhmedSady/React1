import React from 'react';
import style from './footer.module.css'
const Footer = () => {
    return <>
    <footer className=' text-white py-5 nav'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
                </div>
                <div className="col-lg-4 text-center">
                    <h3>AROUND THE WEB</h3>
                    <div className="d-flex justify-content-center ">
                    <div className={style.circle}>
                    <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className={style.circle}>
                    <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className={style.circle}>
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className={style.circle}>
                    <i className="fa-solid fa-globe"></i>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4 text-center">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
            </div>
        </div>
    </footer>
    </>
}

export default Footer;
