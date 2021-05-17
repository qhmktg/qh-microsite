import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import '../Pages/Pages.css'


const STYLES =['Home-bg', 'floor-1-bg', 'floor-2-bg', 'floor-3-bg', 'floor-4-bg', 'floor-LL-bg'];


function HeroSection(props) {

const checkHeroStyling = STYLES.includes(props.style) ? props.style : STYLES[0];


    return (
        <div className={`hero-container floor-hero ${checkHeroStyling}`}>
            <h1 className={props.HeaderStyle}>{props.head}</h1>
            <hr class="pillar-underline" />
            <p>{props.body}</p>
        </div>
    )
}

export default HeroSection
