import React from 'react'
import { Link } from 'react-router-dom';
import colorLogo from '../images/QUANTUM-LOGO-W-01.svg'
import './Footer.css'
function Footer() {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <Link to='/'>Home</Link>
                            <Link to='/Floor-1'>Floor 1</Link>
                            <Link to='/Floor-2'>Floor 2</Link>
                            <Link to='/Floor-3'>Floor 3</Link>
                            <Link to='/Floor-4'>Floor 4</Link>
                            <Link to='/Floor-ll'>Floor LL</Link>

                        </div>
                    </div>
                </div>
                <hr className='footerhr'></hr>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items-secondary">
                            <a target='_blank' href='https://quantum-health.com/'>
                                <img alt='quantum-health logo' className='Logo' src={colorLogo} /></a>
                            <p>Copyright ©2021 Quantum Health. All Rights Reserved. </p>
                            <a href='/' target='_blank'>Privacy Policy</a>  |
                            <a href='/' target='_blank'>  Terms of Use</a>  |
                            <a href='/' target='_blank'>  Accreditation</a>  |
                            <a href='/' target='_blank'>  Site Map</a>
                            <div className='social-media-wrap'>
                                <div className="social-logo">
                                    <Link to='/'><i class="fab fa-facebook-f"></i></Link>
                                    <Link to='/'><i class="fab fa-linkedin-in"></i></Link>
                                    <Link to='/'><i class="fab fa-twitter"></i></Link>
                                    <Link to='/'><i class="fab fa-youtube"></i></Link>
                                    <Link to='/'><i class="fab fa-instagram"></i></Link>
                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer
