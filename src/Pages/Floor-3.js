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
                    // body={[<p className='heroCallOut'>FOR SOME, PRIVACY IS SANCTUARY.</p>, <br />, "Phone rooms, nap nooks and privacy chairs— all designed for privacy and taking time out of the fray."]}
                    body={[<strong>For some Warriors, privacy is THEIR sanctuary.</strong>,
                        " Phone rooms, nap nooks and privacy chairs are all designed for time out from the front lines.", <strong> For others, socializing
                        provides an outlet.</strong>, " Every floor in our new home has huddle rooms designed for collaboration and small meetings, seating areas for light conversations, and harvest tables for Pod meetings and the always-popular Pod-lucks."]}
                    head="Floor 3"
                    label='Adventure'
                    style="floor-3-bg"
                />
            </div>
            {/* <Furniture
                img='https://via.placeholder.com/300'
                headline="THIS HIGH-TOP GOT 77 THUMBS UP FOR CONNECTIVITY AND FIVE STARS FOR PRIVACY." /> */}
            {/* <div className='text-content-container'>
                <h2>FOR SOME WARRIORS, PRIVACY IS THEIR SANCTUARY.</h2>
                <p>Phone rooms, nap nooks and privacy chairs — all designed for time out from the front lines.</p>
                <h2>FOR OTHERS, SOCIALIZING PROVIDES AN OUTLET </h2>
                <p>Every floor in our new home has huddle rooms for small meetings, seating areas for light conversations and harvest tables for Pod meetings and — wait for it — “Pod-lucks”</p>
            </div> */}
            <Pillar
                pillar="Friendship"
                pillarStyle="pillarPurple"
                pillarImage={pillar}
                pillarCopy="We work closely with our members, often in times of need, and develop deep relationships. We become their friends and confidantes." />
            <MemberQuote
                quote={[<p>EVER WONDER WHERE “JAM JAR” CAME FROM?</p>, <span>&quot;</span>,
                    "In one of our conversations, you mentioned that you had talked to Barb on the day she was making strawberry jam. She told you that she was having a good day. The reason she had a good day was because you called her and talked to her and really cared. Please don’t ever change.",
                <strong>Your compassion and genuine interest in people you contact make all the difference in the world.</strong>, "I know Barb would have wanted me to fulfill her promise. Enjoy the strawberry jam with all the love Barb put inside. Thank you.", <span>&quot;</span>]} />
            <div>
                <FindMeSection />
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards_items">
                                <CardItem
                                    src={treePillar}
                                    text="Christmas Vacation Scene"
                                    label='Adventure'
                                    path='/DumpTruck'
                                    CardStyle='purple'
                                    alt='christmas tree' />
                                <CardItem
                                    src={tinman}
                                    text="The Tin Man"
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

