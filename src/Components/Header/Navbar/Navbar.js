import React from 'react';
import './Navbar.css';
import logo from '../../../Images/Group 86.png';
import menu from '../../../Images/menu-2-outline@2x.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light px-0">
            <a class="navbar-brand" href="#">
                <img width="100px" src={logo} alt=""/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""> <img src={menu} alt=""/> </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ml-3 pt-2">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item ml-3 pt-2">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item ml-3 pt-2">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item ml-3 pt-2">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item ml-3 pt-2">
                        <a class="nav-link" href="#">Our Team</a>
                    </li>
                    <li class="nav-item ml-3">
                        <a class="nav-link" href="#">
                            <button className="button">Contact us</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;