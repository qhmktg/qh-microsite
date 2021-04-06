import React from 'react'
import { Link } from 'react-router-dom';
import './FindMe.css';

function FindMe(props) {
    return (
        
        <div className='find-me-container'>
            <div className='find-me-content'>
                <h1>{props.header}</h1>
            </div>
            <Link to={props.to}>
                <img src={props.easterEggImage} />

            </Link>
        </div>
    )
}

export default FindMe
