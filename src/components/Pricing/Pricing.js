import React from 'react';
import './Pricing.css'

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="heading-text container">
        <h2>Choose Your Dedicated Team</h2>
      </div>
      <div className="price-card container text-center">
        <div className="row d-flex justify-content-between">

          <div className="single-card-bx col-sm-10 col-md-4 offset-1 offset-md-0">
            <div className="single-card">
              <h1>$199</h1>
              <h6>FOR BASIC</h6>
              <div className="line my-3"></div>
              <p>Homepage</p>
              <p>No Inner Page</p>
              <p>Asset file</p>
              <p>Source file</p>
              <p>Free Stock Photo</p>
              <p>10 Days Free Support</p>
              <p>24/7 Support</p>
              <button className="button invisible mt-4 mb-3">Order Now</button>
            </div>
          </div>

          <div className="single-card-bx col-sm-10 col-md-4 offset-1 offset-md-0">
            <div className="single-card mt-4 mt-md-0">
              <h1>$199</h1>
              <h6>FOR PREFERRED</h6>
              <div className="line my-3"></div>
              <p>Homepage</p>
              <p>4 Inner Pages</p>
              <p>Asset file</p>
              <p>Source file</p>
              <p>Free Stock Photo</p>
              <p>20 Days Free Support</p>
              <p>24/7 Support</p>
              <button className="button invisible mt-4 mb-3">Order Now</button>
            </div>
          </div>

          <div className="single-card-bx col-sm-10 col-md-4 offset-1 offset-md-0">
            <div className="single-card mt-4 mt-md-0">
              <h1>$199</h1>
              <h6>FOR ELITE</h6>
              <div className="line my-3"></div>
              <p>Homepage</p>
              <p>8 Inner Pages</p>
              <p>Asset file</p>
              <p>Source file</p>
              <p>Free Stock Photo</p>
              <p>30 Days Free Support</p>
              <p>24/7 Support</p>
              <button className="button invisible mt-4 mb-3">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;