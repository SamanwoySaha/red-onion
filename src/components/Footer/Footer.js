import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="footer-container">
                    <img className="logo" src="https://i.ibb.co/xJnnTJk/logo.png" alt="logo" />
                    <ul>
                        <li className="link-title">Explore</li>
                        <li><Link className="link-text" to="#">Home</Link></li>
                        <li><Link className="link-text" to="#">Shop</Link></li>
                        <li><Link className="link-text" to="#">Food Detail</Link></li>
                        <li><Link className="link-text" to="#">About</Link></li>
                    </ul>
                    <ul>
                        <li className="link-title">Features</li>
                        <li><Link className="link-text" to="#">Our Blog</Link></li>
                        <li><Link className="link-text" to="#">Pickup Points near me</Link></li>
                        <li><Link className="link-text" to="#">Sign up to deliver</Link></li>
                    </ul>
                    <ul>
                        <li className="link-title">Resources</li>
                        <li><Link className="link-text" to="#">Site Map</Link></li>
                        <li><Link className="link-text" to="#">Get Help</Link></li>
                        <li><Link className="link-text" to="#">Privacy</Link></li>
                        <li><Link className="link-text" to="#">Contact</Link></li>
                    </ul>
                    <ul>
                        <li className="link-title">Product Help</li>
                        <li><Link className="link-text" to="#">Write a Blog</Link></li>
                        <li><Link className="link-text" to="#">Support</Link></li>
                    </ul>
                </div>
                <div className="footer-container">
                    <p style={{color: 'lightgrey'}}>Copyright &copy; 2020. Online Food.</p>
                    <div style={{ marginLeft: 'auto' }}>
                        <Link to="/" className="footer-bottom-link-text">Privacy Policy</Link>
                        <Link to="/" className="footer-bottom-link-text">Terms of Use</Link>
                        <Link to="/" className="footer-bottom-link-text">Pricing</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;