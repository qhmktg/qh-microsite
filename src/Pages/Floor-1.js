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
import '../Components/Cards.css'
import rubbySlippers from '../images/ruby_slippers_iso_transparent-shadow.png'
import floor1chair from '../images/210304_furniture_fixtures_4250_orange_chair_reading.png'
import stickWithEm from '../images/Stick with Em.svg'

export default function floor1() {
    return (
        <>
            <div className="splashSection">
                <HeroSection
                    body="Making a house feel like home involves making it a reflection of those who live there. So naturally, we involved Warriors in the decision making for everything from floor design and furnishings, to amenities and artwork. We don’t just want to make it a cool place to work — we want to make our new home a reflection of the Warriors within. "
                    head="Floor 1"
                    label='Adventure'
                    style="floor-1-bg"
                />
            </div>
            <Furniture
                img={floor1chair}
                headline="THIS HIGH-TOP GOT 77 THUMBS UP FOR CONNECTIVITY AND FIVE STARS FOR PRIVACY." />
            <div className='text-content-container'>
                <p>Don’t be baffled by the baffles: they do have a function — a very important one. They help absorb light and sound for better ambiance and noise reduction so you can stick to whatever you’re doing, without interruption. Looking cool is just gravy </p>
            </div>
            <Pillar
                pillar="Stick with Me"
                pillarStyle="pillarBlue"
                pillarImage={stickWithEm}
            />
            <MemberQuote
                quote={[<strong>&quot;To My Quantum Health Warrior:</strong>, " How do I thank you for helping get me through the past six months? Recovering from the accident has been hard, but you have not only found ways to help me and save money, you have brought joy to the journey. I loved the picture you sent of you and the other Warriors congratulating me on my final surgery. I will hang on to that! ‘Thank you’ really doesn’t cover how I feel about what you have done. You are making a difference in the world. Don’t ever forget that.", <span>&quot;</span>]} />
            <div>
                <FindMeSection />

                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards_items">
                                <CardItem
                                    src={rubbySlippers}
                                    text="Rubby Slippers"
                                    label='Adventure'
                                    path='/892067'
                                    CardStyle='blue' />
                                <CardItem
                                    src='https://via.placeholder.com/300'
                                    text="Gorilla in the Room"
                                    label='Adventure'
                                    path='/Gorilla'
                                    CardStyle='blue' />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ConferenceRoom
                rooms={['Journey (Main)', 'Yellow Brick Room', 'Extra Mile', '1999']}
                style="floor-1-bg"
            />
            <Footer />
        </>
    )
}

