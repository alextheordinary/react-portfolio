import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div>
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