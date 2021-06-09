import React from 'react'
import '../App.css'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import ConferenceRoom from '../Components/ConferenceRoom'
import FindMeSection from '../Components/FindMeSection'
import CardItem from '../Components/CardItem'
import Pillar from '../Components/Pillar'
// import caution from '../images/construction_tape_GettyImages-530479981.png'
// import hardHat from '../images/hard_hat_yellow.png'
import pillar from '../images/Sanctuary.svg'

export default function floorll() {
    return (
        <>
            {/* <div className="caution-container">
                <img className="hard-hat" src={hardHat} />

                <img className="caution" src={caution} />
            </div>

            <HeroSection
                head="Lower Level"
                style="floor-LL-bg"
                // body="Intense conversations with members happen all the time. That’s why you’ll find sanctuary for Warriors on every floor. When it comes to sanctuary, the lower level provides something for everyone, and plenty to go around. "
            /> */}
            {/* <div className="caution-container">

                <img className="caution-test" src={caution} />
            </div> */}
            {/* <Pillar
                pillar="Sanctuary"
                pillarStyle="pillarYellow"
                pillarImage={pillarimage}
                pillarCopy="We provide a safe place where members can explore options and share anxieties." /> */}
            <div className="splashSection">
                <HeroSection
                    body="NO MATTER WHAT YOU CALL SANCTUARY, THIS FLOOR’S GOT IT."
                    head="Lower Level"
                    label='Adventure'
                    style="floor-LL-bg"
                />
            </div>
            <div className='text-content-container'>
                <h2>THE LOWER LEVEL SCREAMS SANCTUARY, PROVIDING A WORKOUT ROOM, GAME ROOM AND PLENTY OF ROOM TO TAKE A WELL-DESERVED BREAK.</h2>
                <p> Every floor in our new home has huddle rooms for small meetings, seating areas for light conversations and harvest tables for Pod meetings and the always-popular Pod-lucks. Culture destinations include:
                    <br /><br />
                    <ul>
                        <li>Flatbreads and More station</li>
                        <li>Homestyle Grill</li>
                        <li>Bakery</li>
                        <li>Sandwiches and Wraps</li>
                        <li>Salad Bar</li>
                        <li>Grab-n-Go</li>
                        <li>Premium Coffee Bar</li>
                        <li>Complementary Snacks</li>
                        <li>Remote Order Pickup</li>
                        <li>Beverages</li>
                    </ul>
                </p>
            </div>
            <Pillar
                pillar="Sanctuary"
                pillarStyle="pillarYellow"
                pillarImage={pillar}
                pillarCopy="We have extensive knowledge and expertise in virtually every aspect of the healthcare delivery system." />
            <div>
            <div className='text-content-container'>
                <h2>FULL-SERVICE SANCTUARY</h2>
                <p> It’s not a cafeteria. It’s not a break room. It’s a place for Warriors to take a break, unwind and recharge, complete with a workout room, game room and plenty of room to meet or eat lunch from the full-service cafeteria or enjoy the amazing environment with a premium perk, poured by a real barista.<br/><br/>
                <strong>
We are already a “Best Place to Work” without these 85,000 square feet of pure awesomeness.</strong> And as far as designing the new HQ goes, we’re definitely saving the best for last. The lower level is still under construction, under wraps, and understandably marvelous.
                </p>
            </div>
                <FindMeSection />
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards_items">
                                <CardItem
                                    src="{treePillar}"
                                    text="Flying Blue Birds"
                                    label='Adventure'
                                    path='/8717'
                                    CardStyle='yellow'
                                    alt='christmas tree' />
                                <CardItem
                                    src="{treePillar}"
                                    text="Worlds Greatest Cup Of Coffee"
                                    label='Adventure'
                                    path='/6356'
                                    CardStyle='yellow'
                                    alt='tin man' />
                                <CardItem
                                    src="{treePillar}"
                                    text="Legends Never Die"
                                    label='Adventure'
                                    path='/4619'
                                    CardStyle='yellow'
                                    alt='donkey' />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ConferenceRoom
                rooms={['Too Many to Count!']}
                style="floor-LL-bg"
            />
            <Footer />
        </>
    )
}

