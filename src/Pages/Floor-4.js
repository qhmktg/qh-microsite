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
import CardItem from '../Components/CardItem'

export default function floor4() {
    return (
        <>
            <HeroSection
                body={[<p className='heroCallOut'>SANCTUARY ON EVERY FLOOR</p>,<br/>, "Intense conversations with members happen all the time. When you need a moment to reset, but don’t want to go all the way out to your car just to be alone, Warriors can find privacy on every floor, called Sanctuary Rooms — where you can shut the door and sink into the contoured wall pattern that’s styled to take you to another place — your happy place.  "]}
                head="Floor 4"
                label='Adventure'
                style="floor-4-bg"

            />
            <Furniture
                img='https://via.placeholder.com/300'
                headline="THIS HIGH-TOP GOT 77 THUMBS UP FOR CONNECTIVITY AND FIVE STARS FOR PRIVACY." />
            <Pillar 
            pillar="Expertise" 
            pillarStyle="pillarOrange"/>
            <MemberQuote
                quote={[<strong>&quot; To My Quantum Health Warrior:</strong>, "How do I thank you for helping get me through the past six months? Recovering from the accident has been hard, but you have not only found ways to help me and save money, you have brought joy to the journey. I loved the picture you sent of you and the other Warriors congratulating me on my final surgery. I will hang on to that! ‘Thank you’ really doesn’t cover how I feel about what you have done. You are making a difference in the world. Don’t ever forget that.quot;"]} />
            {/* <FindMeSection />
            <FindMe
                header="Lollipops"
                easterEggImage="https://via.placeholder.com/300"
                to='/Lollipops' />
            <FindMe
                header="Lego My Pillars"
                easterEggImage="https://via.placeholder.com/300"
                to='/Lego' />
            <FindMe
                header="If I only had a brain"
                easterEggImage="https://via.placeholder.com/300"
                to='/Brain' /> */}
            <div>
                <FindMeSection />
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards_items">
                                <CardItem
                                    src='https://via.placeholder.com/300'
                                    text="Lollipops"
                                    label='Adventure'
                                    path='/Lollipops'
                                    CardStyle='orange' />
                                <CardItem
                                    src='https://via.placeholder.com/300'
                                    text="Lego My Pillars"
                                    label='Adventure'
                                    path='/Lego'
                                    CardStyle='orange' />
                                <CardItem
                                    src='https://via.placeholder.com/300'
                                    text="If I Only Had a Brain"
                                    label='Adventure'
                                    path='/Brain'
                                    CardStyle='orange' />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ConferenceRoom
                rooms={['The Professor (main)', 'Yoda', 'Genius']}
                style="floor-4-bg"
            />
            <Footer />
        </>
    )
}

