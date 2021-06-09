import React from 'react'
import { Link } from 'react-router-dom';
import './FindMe.css';

function FindMe(props) {
    return (
        
        <div className='find-me-container'>
            <div className='find-me-content'>
                <h3>{props.header}</h3>
            </div>
            <Link to={props.to}>
                <img src={props.easterEggImage} alt={props.alt}/>

            </Link>
        </div>
    )
}

export default FindMe
