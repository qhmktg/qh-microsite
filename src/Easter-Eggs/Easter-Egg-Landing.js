import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { Button } from '../Components/Button'
import '../Components/Button.css'
import Footer from '../Components/Footer'
import './Easter-Egg.css'

const STYLES =['floor-1-bg', 'floor-2-bg', 'floor-3-bg', 'floor-4-bg', 'floor-LL-bg'];
const eggSTYLES =['Normal', 'LL-egg'];

function EasterEggLanding(props) {
    const checkStyling = STYLES.includes(props.style) ? props.style : STYLES[0];
    const eggStyling = eggSTYLES.includes(props.eggStyle) ? props.eggStyle : eggSTYLES[0];

    return (
        <div>
            <div className={`easter-egg-container ${eggStyling}`}>


                <div className="easter-egg-image-container">
                    <img className='easter-egg-image' src={props.img} alt={props.imgalt}/>
                </div>
                <div className='easter-egg-content'>
                    <h1>{props.Title}</h1>
                    <p>{props.info}</p>
                    <Button location={props.floor} buttonStyle='btn--outline' buttonSize="btn--small">
                        {props.BackTo}
                        </Button>
                </div>
                <div className='easter-egg-card-container'>
                    <div className={`easter-egg-card ${checkStyling}`}></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EasterEggLanding
