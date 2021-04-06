import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection(props) {
    return (
        <div className='hero-container'>
            <h1>{props.head}</h1>
            <p>{props.body}</p>
            <div className="hero-btns">
                
            </div>
        </div>
    )
}

export default HeroSection
