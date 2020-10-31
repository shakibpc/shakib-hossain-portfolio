import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer container text-center pt-5 pb-3">
            <div className="social-links my-3">
                <a href="https://github.com/shakibpc" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/shakibpc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://medium.com/@shakibpc00" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium-m"></i></a>
            </div>
            <p className="main">Made with Love by <a href="https://github.com/tayab-pabel">Md. Shakib Hossain</a></p>
        </div>
    );
};

export default Footer;