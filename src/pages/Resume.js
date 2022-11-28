import React from 'react';

const Resume = () => {
    return (
        <div className='card m-3 p-3'>
            <h2 className='is-size-3'>Resume</h2>
            <a href='/' target="_blank" rel="noreferrer" className='button is-primary m-1'>Download Resume</a>
                <div className='is-size-6 card-content'>
                    <ul>
                        <p className='is-size-3'>Skills</p>
                        <li className='is-size-6'>HTML</li>
                        <li className='is-size-6'>CSS</li>
                        <li className='is-size-6'>Javascript</li>
                        <li className='is-size-6'>Node.js</li>
                        <li className='is-size-6'>React</li>
                        <li className='is-size-6'>MongoDB</li>
                        <li className='is-size-6'>mySQL</li>
                        <li className='is-size-6'>Expess.js</li>
                    </ul>
                </div>
        </div>

    );
};

export default Resume;