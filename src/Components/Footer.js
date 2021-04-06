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
                <hr></hr>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items-secondary">
                            <Link to='/quantum-health'><img alt='quantum-health logo' className='Logo' src={colorLogo} /></Link>
                            <p>Copyright ©2021 Quantum Health. All Rights Reserved. </p>
                            <Link to='/privacy-policy' target='_blank'>Privacy Policy</Link>  |
                            <Link to='/terms-of-use' target='_blank'>  Terms of Use</Link>  |
                            <Link to='/accreditation' target='_blank'>  Accreditation</Link>  |
                            <Link to='/site-map' target='_blank'>  Site Map</Link>
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
