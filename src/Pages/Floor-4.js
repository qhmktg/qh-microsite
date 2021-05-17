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
import KenzieChair from '../images/210304_furniture_fixtures_4299_kenzie_peeking.png'
import floor4Chair from '../images/210304_furniture_fixtures_4097_green.png'
import pillar from '../images/Expertise.svg'
import lollipop from '../images/210215_building_graphics_3609_lollipops.png'
import lego from '../images/210215_building_graphics_3405_LEGOs.png'
import scarecrow from '../images/210215_building_graphics_3434_scarecrow.png'
export default function floor4() {
    return (
        <>
            <div className="splashSection">
                <HeroSection
                    body="The compassion and empathy with which Warriors provide are often game-changing for members who feel hopeless, as if no one is listening or doing anything to help them. Combining those Warrior traits with industry-leading expertise — this floor’s pillar — is what truly makes a difference when it comes to seeing members through to the best possible outcomes."
                    head="Fourth Floor"
                    label='Adventure'
                    style="floor-4-bg"
                />
            </div>
            <Furniture
                img={KenzieChair}
                headline="WHO IS THE WARRIOR BEHIND THE CURTAIN? SOMEONE IN A MOMENT OF COMFORT" />
            <Furniture
                img={floor4Chair}
                headline="PLUG IN AND CHILL OUT" />
            <Pillar
                pillar="Expertise"
                pillarStyle="pillarOrange"
                pillarImage={pillar} 
                pillarCopy="We have extensive knowledge and expertise in virtually every aspect of the healthcare delivery system."/>
            <MemberQuote
                quote={[<span>&quot;</span>, "After receiving various notices from my insurer and hospital, I absolutely dreaded delving into the healthcare abyss to sort through the issues. I had gotten a letter from my company about Quantum, so I decided to call and see if they could help. I could not have been more pleased and surprised with the pleasant, professional, knowledgeable support I received from my Quantum Care Coordinator. He had all of the records at his fingertips. He sorted through the issues, confirmed current status and, to my amazement, proactively reached out to the various providers to coordinate a resolution. ", <strong> I was amazed! Thank you for an extraordinary experience. &quot;</strong>]}
                header="Member Quote"/>

            <div>
                <FindMeSection />
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards_items">
                                <CardItem
                                    src={lollipop}
                                    text="Lollipops"
                                    label='Adventure'
                                    path='/Lollipops'
                                    CardStyle='orange' />
                                <CardItem
                                    src={lego}
                                    text="Legos"
                                    label='Adventure'
                                    path='/Lego'
                                    CardStyle='orange' />
                                <CardItem
                                    src={scarecrow}
                                    text="Scarecrow"
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

