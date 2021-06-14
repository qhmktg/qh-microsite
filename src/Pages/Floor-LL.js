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
import legends from '../images/3014_legends-Card.png'
import Coffee from '../images/3017_WBCO_Coffee_crop-SM.png'
import BlueBirds from '../images/3026_blue_birds.png'

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
                    body=""
                    head="Lower Level"
                    label='Adventure'
                    style="floor-LL-bg"
                />
            </div>
            <div className='text-content-container'>
                <h2>NO MATTER WHAT YOU CALL SANCTUARY, THIS FLOOR’S GOT IT — 85,000 SQUARE FEET OF IT</h2>
                <p> It’s not a cafeteria. It’s not a break room. It’s a place for Warriors to unwind and recharge, complete with a fitness center, game room, and plenty of room to meet, eat and take in the amazing environment with a premium perk, poured by a professional barista at the <strong>JAVA SPOT.</strong> 
                </p>
            </div>
            <Pillar
                pillar="Sanctuary"
                pillarStyle="pillarYellow"
                pillarImage={pillar}
                pillarCopy="We provide a safe place where members can explore options and share anxieties. " />
            <div>
            <div className='text-content-container'>
                <h2>Sanctuary and food go hand in hand. Welcome to The Hungry Warrior!</h2>
                <p> Food is comforting, nurturing, nourishing, and very much a part of Warrior culture. That’s why we’re pleased to offer a full-service, mouthwatering and hearty variety at The Hungry Warrior café! <br/><br/>
                Food stations include: 
                <br /><br />
                    <ul className="LL-sanctuary">
                        <li><strong>CRAVINGS</strong> homestyle grill</li>
                        <li><strong>PERKS</strong> complimentary coffee</li>
                        <li><strong>QUENCH</strong> beverage center</li>
                        <li><strong>CHEF’S TABLE</strong> entrees </li>
                        <li><strong>THE GARDEN</strong> salad bar</li>
                        <li><strong>SAMMIES &#38; WRAPS</strong></li>
                        <li><strong>FIRESIDE</strong> flat breads </li>
                        <li><strong>ORDER UP</strong> remote order pickup</li>
                        <li><strong>SWEET TOOTH</strong> baked goods and soft serve</li>
                    </ul>
                </p>
            </div>
                <FindMeSection />
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards_items">
                                <CardItem
                                    src={BlueBirds}
                                    text="Flying Blue Birds"
                                    label='Adventure'
                                    path='/8717'
                                    CardStyle='yellow'
                                    alt='christmas tree' />
                                <CardItem
                                    src={Coffee}
                                    text="Worlds Greatest Cup Of Coffee"
                                    label='Adventure'
                                    path='/6356'
                                    CardStyle='yellow'
                                    alt='tin man' />
                                <CardItem
                                    src={legends}
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

