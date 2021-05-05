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
import pillar from '../images/Friendship.svg'
import treePillar from '../images/210215_building_graphics_3091_f_tree-card.png'
import tinman from '../images/only_hadda_heart_white_OL-card.png'
import noJackasses from '../images/dont_be_an_ass_ko-card.png'
import './Pages.css'
export default function floor3() {
    return (
        <>
            <div className="splashSection">
                <HeroSection
                    body={[<p className='heroCallOut'>FOR SOME, PRIVACY IS SANCTUARY.</p>, <br />, "Phone rooms, nap nooks and privacy chairs— all designed for privacy and taking time out of the fray."]}
                    head="Floor 3"
                    label='Adventure'
                    style="floor-3-bg"
                />
            </div>
            {/* <Furniture
                img='https://via.placeholder.com/300'
                headline="THIS HIGH-TOP GOT 77 THUMBS UP FOR CONNECTIVITY AND FIVE STARS FOR PRIVACY." /> */}
            <div className='text-content-container'>
                <h2>FOR SOME WARRIORS, PRIVACY IS THEIR SANCTUARY.</h2>
                <p>Phone rooms, nap nooks and privacy chairs — all designed for time out from the front lines.</p>
                <h2>FOR OTHERS, SOCIALIZING PROVIDES AN OUTLET </h2>
                <p>Every floor in our new home has huddle rooms for small meetings, seating areas for light conversations and harvest tables for Pod meetings and — wait for it — “Pod-lucks”</p>
            </div>
            <Pillar
                pillar="Friendship"
                pillarStyle="pillarPurple"
                pillarImage={pillar} />
            <MemberQuote
                quote={[<strong>&quot; To My Quantum Health Warrior:</strong>, "How do I thank you for helping get me through the past six months? Recovering from the accident has been hard, but you have not only found ways to help me and save money, you have brought joy to the journey. I loved the picture you sent of you and the other Warriors congratulating me on my final surgery. I will hang on to that! ‘Thank you’ really doesn’t cover how I feel about what you have done. You are making a difference in the world. Don’t ever forget that.quot;"]} />
            {/* <FindMeSection />
        <FindMe
            header="“You couldn't hear a dump truck diving through a nitroglycerin plant.”"
            easterEggImage="https://via.placeholder.com/300"
            to='/DumpTruck' />
               <FindMe
            header="I'd be friends with all the sparrows'"
            easterEggImage="https://via.placeholder.com/300"
            to='/Sparrows' />
               <FindMe
            header="No Jackasses"
            easterEggImage="https://via.placeholder.com/300"
            to='/NoJackasses' /> */}
            <div>
                <FindMeSection />
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards_items">
                                <CardItem
                                    src={treePillar}
                                    text="How Lovely are thy Branched"
                                    label='Adventure'
                                    path='/DumpTruck'
                                    CardStyle='purple'
                                    alt='christmas tree' />
                                <CardItem
                                    src={tinman}
                                    text="I’d Be Friends with All the Sparrows"
                                    label='Adventure'
                                    path='/Sparrows'
                                    CardStyle='purple'
                                    alt='tin man' />
                                <CardItem
                                    src={noJackasses}
                                    text="No Jackasses"
                                    label='Adventure'
                                    path='/NoJackasses'
                                    CardStyle='purple'
                                    alt='donkey' />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ConferenceRoom
                rooms={['Jam Jar (Main)', 'Peas In A Pod', 'Toto']}
                style="floor-3-bg"
            />
            <Footer />
        </>
    )
}

