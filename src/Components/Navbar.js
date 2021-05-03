import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
import colorLogo from '../images/QUANTUM-LOGO-C-01.svg'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <>
            <div className="Nav-master-container">
                <nav className="navbar ">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <img alt='quantum-health logo' src={colorLogo} />
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/floor-1' className='nav-links' onClick={closeMobileMenu}>Floor 1</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/floor-2' className='nav-links' onClick={closeMobileMenu}>Floor 2</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/floor-3' className='nav-links' onClick={closeMobileMenu}>Floor 3</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/floor-4' className='nav-links' onClick={closeMobileMenu}>Floor 4</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/floor-ll' className='nav-links' onClick={closeMobileMenu}>Floor LL</Link>
                            </li>
                            <li className='nav-item'>
                                <a target='_blank' href='https://quantum-health.com/' className='nav-links' onClick={closeMobileMenu}>Quantum-Health</a>
                            </li>
                        </ul>
                        {
                            button && <Button buttonStyle='btn--outline'> SIGN UP</Button>
                        }
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar