import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <h3>
                <Link to="/">
                    Git Hub
                </Link>
                {" "}
                <Link to="/">
                    LinkedIn
                </Link>
                {" "}
                <Link to="/">
                    Something Else
                </Link>
                </h3>
            </div>
        </footer>
    );
};

export default Footer;