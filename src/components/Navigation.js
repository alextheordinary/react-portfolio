import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navbar is-success is-spaced">
            <div className="navbar-menu is-active">
                <div className="navbar-start">
                    <div className="navbar-item">
                    <NavLink to="/" className="navbar-item">
                        <h3>About Me</h3>
                    </NavLink>
                    </div>
                    <NavLink to="/portfolio" className="navbar-item">
                        <h3>Portfolio</h3>
                    </NavLink>
                    <NavLink to="/contact" className="navbar-item">
                        <h3>Contact</h3>
                    </NavLink>
                    <NavLink to="/resume" className="navbar-item">
                        <h3>Resume</h3>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;