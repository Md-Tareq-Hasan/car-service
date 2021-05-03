import React from 'react';
import "./Nevbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <img className='bg-light' src="http://wpkixx.com/html/car-carry/images/logo-black.png" alt="" />

          <ul class="navbar-nav ml-auto">

            <li class="nav-item">
              <Link to="/home" class="nav-link active mr-5 text-light" href="">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link active mr-5 text-light" href="">About Us</Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link active mr-5 text-light" href="">Project</Link>
            </li>

            <li class="nav-item">
              <Link to="/admin" class="nav-link active mr-5 text-light" href="">Admin</Link>
            </li>
            <li class="nav-item">
              <Link to="/login" class="nav-link active mr-5 text-light" href="">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;