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

export default function floor3() {
    return (
        <>
        <HeroSection
            body="Making a house feel like home involves making it a reflection of those who live there. So naturally, we involved Warriors in the decision making for everything from floor design and furnishings, to amenities and artwork. We don’t just want to make it a cool place to work — we want to make our new home a reflection of the Warriors within. "
            head="Floor 3"
            label='Adventure'
        />
        <Furniture
            img='https://via.placeholder.com/300'
            headline="THIS HIGH-TOP GOT 77 THUMBS UP FOR CONNECTIVITY AND FIVE STARS FOR PRIVACY." />
        <Pillar />
        <MemberQuote
            quote={[<strong>&quot; To My Quantum Health Warrior:</strong>, "How do I thank you for helping get me through the past six months? Recovering from the accident has been hard, but you have not only found ways to help me and save money, you have brought joy to the journey. I loved the picture you sent of you and the other Warriors congratulating me on my final surgery. I will hang on to that! ‘Thank you’ really doesn’t cover how I feel about what you have done. You are making a difference in the world. Don’t ever forget that.quot;"]} />
        <FindMeSection />
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
            to='/NoJackasses' />
        <ConferenceRoom 
        rooms ={['Jam Jar (Main)', 'Peas In A Pod', 'Toto']}/>
        <Footer />
    </>
    )
}

