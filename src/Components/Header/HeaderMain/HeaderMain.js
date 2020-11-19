import React from 'react';
import './HeaderMain.css';
import img from '../../../Images/16 [Converted]@2x.png';

const HeaderMain = () => {
    return (
        <section className='header-main'>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <h1>Florence agency</h1>
                    <p className='text-black-50 mt-5 mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Non corporis ad consequuntur consequatur nulla iste impedit sint, 
                        eligendi quisquam molestias.
                    </p>
                    <button className="button">See pricing</button>
                </div>
                <div className="col-lg-6 col-md-12 mt-lg-0 mt-5">
                    <img width="100%" src={img} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;