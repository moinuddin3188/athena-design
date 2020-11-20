import React from 'react';
import './Contact.css';
import img from '../../Images/20 [Converted]@2x.png';


const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-12 order-2 order-md-1 mt-5 mt-md-0">
                        <img width="100%" src={img} alt=""/>
                    </div>
                    <div className="col-md-6 col-12 order-1 order-md-2 d-flex align-items-center">
                        <div className="pl-md-5">
                            <h2>Stay Running & Project</h2>
                            <p className='text-black-50 pt-3 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro libero veniam nihil error, totam, sed voluptas nobis vero recusandae eligendi accusantium vel quasi commodi hic.</p>
                            <button className="button">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;