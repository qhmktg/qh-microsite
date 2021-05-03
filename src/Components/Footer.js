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
                            <a href='https://quantum-health.com/Privacy-Policy.shtml' target='_blank'>Privacy Policy</a>  |
                            <a href='https://quantum-health.com/Terms.shtml' target='_blank'>  Terms of Use</a>  |
                            <a href='https://quantum-health.com/Accreditation.shtml' target='_blank'>  Accreditation</a>  |
                            <a href='/' target='_blank'>  Site Map</a>
                            <div className='social-media-wrap'>
                                <div className="social-logo">
                                    <a href="https://www.facebook.com/QuantumHealth1" target='_blank'><i class="fab fa-facebook-f" target='_blank'></i></a>
                                    <a href="https://www.linkedin.com/company/quantum-health/mycompany/" target='_blank'><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://twitter.com/QuantumHealth1" target='_blank'><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.youtube.com/channel/UCc59JqvFMJxkWWGJXiJRUdg" target='_blank'><i class="fab fa-youtube"></i></a>
                                    <a href="https://www.instagram.com/quantum_health/" target='_blank'><i class="fab fa-instagram"></i></a>
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
