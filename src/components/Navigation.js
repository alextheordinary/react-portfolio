import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to="/">
                <h3>About Me</h3>
            </Link>
            <Link to="/portfolio">
                <h3>Portfolio</h3>
            </Link>
            <Link to="/contact">
                <h3>Contact</h3>
            </Link>
            <Link to="/resume">
                <h3>Resume</h3>
            </Link>
        </div>
    );
};

export default Navigation;