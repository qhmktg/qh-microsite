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

export default function floor3() {
    return (
        <>
            <HeroSection
                 body={[<p className='heroCallOut'>FOR SOME, PRIVACY IS SANCTUARY.</p>,<br/>, "Phone rooms, nap nooks and privacy chairs— all designed for privacy and taking time out of the fray."]}
                head="Floor 3"
                label='Adventure'
                style="floor-3-bg"

            />
            <Furniture
                img='https://via.placeholder.com/300'
                headline="THIS HIGH-TOP GOT 77 THUMBS UP FOR CONNECTIVITY AND FIVE STARS FOR PRIVACY." />
            <Pillar 
            pillar="Friendship" 
            pillarStyle="pillarPurple"/>
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
                                    src='https://via.placeholder.com/300'
                                    text="How Lovely are thy Branched"
                                    label='Adventure'
                                    path='/DumpTruck'
                                    CardStyle='purple' />
                                <CardItem
                                    src='https://via.placeholder.com/300'
                                    text="I’d Be Friends with All the Sparrows"
                                    label='Adventure'
                                    path='/Sparrows'
                                    CardStyle='purple' />
                                <CardItem
                                    src='https://via.placeholder.com/300'
                                    text="No Jackasses"
                                    label='Adventure'
                                    path='/NoJackasses'
                                    CardStyle='purple' />
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

