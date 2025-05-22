import React from 'react';
import './Footer.css';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
    return (
        <div className='footer-L'>
            <span>&copy; Copyright 2025 by Rafly-ras Project</span>
            <div className="social-icons">
                <a href="https://github.com/Rafly-ras" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/raflyadityas" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="in/raflyadityas54" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
}

export default Footer
