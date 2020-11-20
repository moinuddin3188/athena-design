import React from 'react';
import './Header.css';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <section className="header-container" id='home'>
            <div className="container">
                <Navbar/>
                <HeaderMain/>
            </div>
        </section>
    );
};

export default Header;