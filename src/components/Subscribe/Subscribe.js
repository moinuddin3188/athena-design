import React from 'react';
import './Subscribe.css';


const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="heading-text container text-center">
        <h2>Get Your Design right, right Now</h2>
        <p>Be the first Know our latest offer and updates!</p>
      </div>

      <div className="input-field container">
        <div class="input-group mb-3 w-75 rounded">
        
          <input
            type="text"
            class="form-control border-0 outline-0"
            placeholder="Enter your email address"
            
            />
          <div class="input-group-append">
            <button
              class="button subscribe-btn rounded-0"
              type="button">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;