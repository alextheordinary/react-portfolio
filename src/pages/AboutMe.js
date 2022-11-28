import React from 'react';
import profilepic from '../images/alex-profile.jpg'


const AboutMe = () => {
    return (
        <div className='card m-3 p-3'>
            <h2 className='is-size-3'>About Me</h2>
            <div className='card-image'>
                <img src={profilepic} alt='Alex Bellamy' className='image is-128x128' />
            </div> 
                <p className='is-size-6 card-content'>
                    I am currently a student in the UCONN Coding Boot Camp Program. I will fill this in with more information as I get a better understanding of my capabilities and career aims.
                </p>
        </div>

    );
};

export default AboutMe;