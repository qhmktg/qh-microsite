import React from 'react'
import '../App.css'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Pillar from '../Components/Pillar'

import caution from '../images/construction_tape_GettyImages-530479981.png'
import hardHat from '../images/hard_hat_yellow.png'
import pillarimage from '../images/Sanctuary.svg'
export default function floorll() {
    return (
        <>
            <div className="caution-container">
                <img className="hard-hat" src={hardHat} />

                <img className="caution" src={caution} />
            </div>

            <HeroSection
                head="Lower Level"
                style="floor-LL-bg"
                // body="Intense conversations with members happen all the time. That’s why you’ll find sanctuary for Warriors on every floor. When it comes to sanctuary, the lower level provides something for everyone, and plenty to go around. "
            />
            {/* <div className="caution-container">

                <img className="caution-test" src={caution} />
            </div> */}
            {/* <Pillar
                pillar="Sanctuary"
                pillarStyle="pillarYellow"
                pillarImage={pillarimage}
                pillarCopy="We provide a safe place where members can explore options and share anxieties." /> */}
            <Footer />
        </>
    )
}

