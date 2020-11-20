import React from 'react';
import './Achievements.css';
import img from '../../Images/happy@2x.png';
import img5 from '../../Images/happy@2xblack.png';
import img2 from '../../Images/marketing@2x.png';
import img3 from '../../Images/surface1@2x.png';
import img4 from '../../Images/transportation@2x.png';
import img6 from '../../Images/marketing@2x white.png';
import img7 from '../../Images/surface1@2x white.png';
import img8 from '../../Images/transportation@2x white.png';

const Achievements = () => {

    const achievements = [
        { title: 'Happy Clients', class: 'first', img: img, img2: img5, count: '700+' },
        { title: 'Projects Completed', class: 'second', img: img6, img2: img2, count: '140+' },
        { title: 'Crazy Minds', class: 'second', img: img7, img2: img3, count: '25+' },
        { title: 'Running Projects', class: 'first', img: img8, img2: img4, count: '75+' }
    ]

    return (
        <div className="achievements-container" id="achievements">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-12 d-flex align-items-center">
                        <div className="pr-md-5 pr-0">
                            <h2>Our Achievements</h2>
                            <p className='text-black-50 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto totam quos reprehenderit numquam excepturi esse omnis quia inventore expedita distinctio. numquam excepturi esse.</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="row">
                            {
                                achievements.map(achievement =>
                                    <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                                        <div className= {`achievement-card d-flex mb-4 ${achievement.class}`}>
                                            <div className="d-flex align-items-center">
                                                <img className="after-hover" width="60px" src={achievement.img} alt=""/>
                                                <img className="before-hover" width="60px" src={achievement.img2} alt=""/>
                                            </div>
                                            <div className='pl-4'>
                                                <h3>{achievement.count}</h3>
                                                <p>{achievement.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;