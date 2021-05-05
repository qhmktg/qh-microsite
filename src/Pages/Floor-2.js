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
import floor2Chair from '../images/chair_fake_shadow.png'
import pillarWarrior from '../images/Warrior.svg'
import crows from '../images/210215_building_graphics_3135_f.png'
import bunny from '../images/210215_building_graphics_3808_bunny_rabbit-card.png'
import lion from '../images/210215_building_graphics_3207_lion_w_feet_OL-card.png'
export default function floor2() {
    return (
        <>
            {/* --------Hero section-------- */}
            <div className="splashSection">

            <HeroSection
                body={[<p className='heroCallOut'>&quot;EGD MOMENTS &quot;</p>, <br />, "Stare at the wall designs long enough and you’ll see words. That’s OK, you’re supposed to. These moments, brought to you by environmental graphic design, make warrioring beautiful."]}
                head="Floor 2"
                style="floor-2-bg"
            />
            </div>
                        {/* --------Furniture call out section-------- */}

            <Furniture
                img={floor2Chair}
                headline="THIS HIGH-TOP GOT 77 THUMBS UP FOR CONNECTIVITY AND FIVE STARS FOR PRIVACY." />
            <Pillar 
             pillar="Warrior" 
             pillarStyle="pillarGreen"
             pillarImage={pillarWarrior}/>
            <MemberQuote
                quote={[<strong>&quot; To My Quantum Health Warrior:</strong>, "How do I thank you for helping get me through the past six months? Recovering from the accident has been hard, but you have not only found ways to help me and save money, you have brought joy to the journey. I loved the picture you sent of you and the other Warriors congratulating me on my final surgery. I will hang on to that! ‘Thank you’ really doesn’t cover how I feel about what you have done. You are making a difference in the world. Don’t ever forget that.quot;"]} />
            <div>
                <FindMeSection />
                {/*<FindMe
            header="Warm and Fuzzy, With a Secret Weapon"
            easterEggImage="https://via.placeholder.com/300"
            to='/WarmAndFuzzy' />
                <FindMe
            header="The Birds"
            easterEggImage="https://via.placeholder.com/300"
            to='/TheBirds' />
               <FindMe
            header="Put 'em Up, Put 'em Up"
            easterEggImage="https://via.placeholder.com/300"
            to='/PutEmUp' /> */}
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards_items">
                                <CardItem
                                    src={bunny}
                                    text="Warm and Fuzzy, With A Secret Weapon"
                                    label='Adventure'
                                    path='/WarmAndFuzzy'
                                    CardStyle='green' />
                                <CardItem
                                    src={crows}
                                    text="The Birds"
                                    label='Adventure'
                                    path='/TheBirds'
                                    CardStyle='green' 
                                    alt='crows'/>
                                <CardItem
                                    src={lion}
                                    text="Put ‘Em Up, Put ‘Em Up "
                                    label='Adventure'
                                    path='/PutEmUp'
                                    CardStyle='green' />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ConferenceRoom
                rooms={['RAMP UP CONFERENCE ROOM (Main)', 'THE SHIELD', 'SUPER HERO']}
                style="floor-2-bg"
            />
            <Footer />
        </>
    )
}
