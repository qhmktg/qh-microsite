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
                headline="TUSH TESTED, WARRIOR APPROVED" />
            <Pillar 
             pillar="Warrior" 
             pillarStyle="pillarGreen"
             pillarImage={pillarWarrior}
             pillarCopy="We are passionate about taking on the parties that members perceive to be either hostile or unfriendly to their interests."/>
            <MemberQuote
                quote={[ <span>&quot;</span>, "One of our members was in an accident that left him a paraplegic. It killed his best friend, so the fact he even survived it is a miracle. But he faces a new normal: life in a wheelchair with painful survivor’s guilt. I connected with him three months after the crash. He shared that neighbors were taking turns carrying him in and out of the house because he and his wife didn’t have a wheelchair ramp. He was also trying to find someone to modify his care with hand controls so that he could drive. Helping him in every way possible became my mission. I set up therapy sessions, chased authorizations, outreached for medical supplies, assisted with claims, found a company to build him a wheelchair ramp, identified an organization to get him a mobility scooter and, most importantly, provided emotional support and resources to help him through feelings of depression and anger." ,<strong> He is getting stronger every day and is in much better spirits. And I am proud to be by his side as he does.&quot;</strong> ]} />
            <div>
                <FindMeSection />
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards_items">
                                <CardItem
                                    src={bunny}
                                    text="The Bunny"
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
                                    text="Cowardly Lion"
                                    label='Adventure'
                                    path='/PutEmUp'
                                    CardStyle='green' />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ConferenceRoom
                rooms={['RAMP UP (Main)', 'THE SHIELD', 'SUPER HERO']}
                style="floor-2-bg"
            />
            <Footer />
        </>
    )
}
