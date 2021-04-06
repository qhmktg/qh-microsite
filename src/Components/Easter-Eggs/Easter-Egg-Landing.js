import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import '../Button.css'
import Footer from '../Footer'
import './Easter-Egg.css'

function EasterEggLanding(props) {
    return (
        <div>
            <div className="easter-egg-container">


                <div className='easter-egg-image'>
                    <img src={props.img} />
                </div>
                <div className='easter-egg-content'>
                    <h1>{props.Title}</h1>
                    <p>{props.info}</p>
                    <Button location={props.floor} buttonStyle='btn--outline' buttonSize="btn--small">
                        Back to Floor 1
                        </Button>
                </div>
                <div className='easter-egg-card-container'>
                    <div className='easter-egg-card'></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EasterEggLanding
