import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {


    return <>
        <nav className='navbar navbar-expand-lg nav px-5 fixed-top ' id='nav'>
  <div className="container-fluid ">
  <Link className="nav-link text-white fs-1 ms-5 fw-bolder" to={'/'}>Start Frameork</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink  className=" me-3 fs-5 text-light fw-bold p-2  rounded-3"   to={'about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" me-3 fs-5 text-light fw-bold p-2 rounded-3" to={'portofolio'}>Portofolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" me-3 fs-5 text-light fw-bold p-2 rounded-3" to={'contact'}>Contact</NavLink>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>
    </>
}

export default Navbar;
