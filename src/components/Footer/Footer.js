import React from 'react';
import './Footer.css';
import Logo from '../../Images/Group 86.png';
import Facebook from '../../Images/facebook-logo-in-circular-shape@2x.png';
import Twitter from '../../Images/twitter (4)@2x.png';
import Linkedin from '../../Images/linkedin (2)@2x.png';
import Dribble from '../../Images/dribbble (1)@2x.png';
import Behance from '../../Images/Group 35.png';




const Footer = () => {
  return (
    <div className="footer container">
      <div className="row">
        <div className="col-10 offset-3 offset-md-0 col-md-5 logo-area">
          <img className="footer-logo" src={Logo} alt="" />
          <ul className="d-flex list-unstyled justify-content-between w-50">
            <li>
              <a href="">
                <img
                  className="social-icon"
                  src={Facebook}
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  className="social-icon"
                  src={Twitter}
                  alt="twitter"
                />
              </a>
              </li>
            <li>
              <a href="">
                <img
                  className="social-icon"
                  src={Linkedin}
                  alt="linkedin"
                />
              </a>
              </li>
            <li>
              <a href="">
                <img
                  className="social-icon"
                  src={Dribble}
                  alt="dribble"
                />
              </a>
              </li>
            <li>
              <a href="">
                <img
                  className="social-icon"
                  src={Behance}
                  alt="behance"
                />
              </a>
              </li>
          </ul>
        </div>
        <div className="col-12 offset-4 offset-md-0 col-md-7 list-area">
          <div className="row">
            <div className="col-md-4 mt-4 mt-md-0">
                <li>Features</li>
                <li>Enterprise</li>
                <li>Pricing</li>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
                <li>Blog</li>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Status</li>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
                <li>About Us</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Login</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;