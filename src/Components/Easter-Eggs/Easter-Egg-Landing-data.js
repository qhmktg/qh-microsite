import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import '../Button.css'
import Footer from '../Footer'
import './Easter-Egg.css'
import { EasterEggProvider } from '../context.js'
import { EasterEggConsumer } from '../context.js'

function EasterEggLanding() {
    const [EasterEggs, setEasterEggs] = useContext(EasterEggProvider)
    return (
        <EasterEggConsumer>
            {
                value => {
                    const {
                        id,
                        title,
                        img,
                        info
                    } = value.detailProduct;
                    return (
                        <div>
                                <div className="easter-egg-container">

                                    <div className='easter-egg-image'>
                                        <img src={EasterEgg.img} />
                                    </div>
                                    <div className='easter-egg-content'>
                                        <h1>{EasterEgg.title}</h1>
                                        <p>{EasterEgg.info}</p>
                                        <Button to={EasterEgg.floor} buttonStyle='btn--outline' buttonSize="btn--medium">Back to Floor 1</Button>
                                    </div>
                                    <div className='easter-egg-card-container'>
                                        <div className='easter-egg-card'></div>
                                    </div>
                                </div>
                            <Footer />
                        </div>
                    );
                }
            }
        </EasterEggConsumer>
    )
}

export default EasterEggLanding
