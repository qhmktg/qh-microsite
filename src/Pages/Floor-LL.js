import React from 'react'
import '../App.css'
import Footer from '../Components/Footer'
import Furniture from '../Components/Furniture'
import HeroSection from '../Components/HeroSection'
import Pillar from '../Components/Pillar'
import MemberQuote from '../Components/Member-Quote'
import FindMe from '../Components/FindMe'
import ConferenceRoom from '../Components/ConferenceRoom'
import FindMeSection from '../Components/FindMeSection'
import caution from '../images/construction_tape_GettyImages-530479981.png'
import hardHat from '../images/hard_hat_yellow.png'
export default function floorll() {
    return (
        <>       
        <div className="caution-container">
        <img className="hard-hat" src={hardHat}/>

         <img className="caution" src={caution}/>
         </div>

        <HeroSection
            head="Floor LL"
            style="floor-LL-bg"

        />
        <Footer />
    </>
    )
}

