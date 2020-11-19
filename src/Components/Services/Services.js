import React from 'react';
import './Services.css';
import img1 from '../../Images/Group 65@2x.png';
import img2 from '../../Images/Group 66@2x.png';
import img3 from '../../Images/Group 69@2x.png';
import img4 from '../../Images/Group 72@2x.png';

const Services = () => {

    const services = [
        { name: 'Experience Design', img: img1 },
        { name: 'Interface Design', img: img2 },
        { name: 'Prototyping', img: img3 },
        { name: 'Illustration', img: img4 }
    ];

    return (
        <section className="services-container">
            <div className="text-center mb-5">
                <h2>What we do</h2>
                <p className='text-black-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Iure, dolorum lorem ipsum</p>
            </div>
            <div className="container">
                <div className="service pt-4">
                    <div className="row">
                        {
                            services.map(service =>
                                <div className="col-md-3 col-sm-6 col-12 text-center service-card">
                                    <img width="100px" src={service.img} alt="" />
                                    <h5 className='mt-4'>{service.name} </h5>
                                    <p className='text-black-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, aspernatur.</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;