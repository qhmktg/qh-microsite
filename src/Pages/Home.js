import '../App.css'
import React from 'react';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer'
import LowerNavigation from '../Components/LowerNavigation';
import '../Components/TextContent.css'
import '../Components/HomePillars'
import HomePillars from '../Components/HomePillars';
import './Pages.css'
import '../Components/HeroSection.css'
import '../App.css'
import '../Pages/Pages.css'

import heartSheild from '../images/Heart-sheild.svg'
function Home() {
    return (
        <>
            {/* <HeroSection 
        head={[<span className="Welcome">Welcome</span>, <br />, <span className="Home">Home</span>]}
        style="Home-bg"      
        className='floor-LL-bg'
        /> */}

            <div className="hero-container Home-bg">
                <h1 className='hero-copy'>
                    <span className="Welcome">Welcome</span>
                    <br />
                    <span className="Home">Home</span>
                </h1>
                <img className='home-heart-sheild' src={heartSheild} />

            </div>
            {/* --------Middle Content-------- */}
            <div className='text-content-container'>
                <p><strong>Welcome to the house that Warriors™ built.</strong> They are the heart and soul of this company, embodying our values, living our brand, and fighting the good fight every day for our members. They’re the reason we succeed. They’re the reason we’re here. Right here. On a brand-new campus where Warriors can thrive.
                </p> <p>You know it’s right when everything just falls into place. Five floors, five foundational pillars, and five senses to take it all in. Warriors weighed in on furniture and fixtures in focus groups, and we’ve incorporated our past, present and future into the design — who thought five storeys would have so many stories to tell?</p>
                <p> As you journey around the building, be sure to look for the nostalgic wall graphics in unexpected places. You may find characters from the Land of Oz, nods to Kara’s favorite movies, and even the “gorilla in the room.”
                </p>
            </div>
            <div className='text-content-container'>
                <div className="section-header">
                    <h2>Defining Pillars</h2>
                    <hr className="pillar-underline" />
                </div>
                <p><strong>What is a band pillar? </strong></p>
                <p>Just as pillars hold up a roof, brand pillars support the brand — we have five of them. Everything we do, from our training and quality assurance to our performance evaluations and Pod structure, is based on these pillars. By staying true to them we provide the guidance and support our members need throughout every step of their journeys.</p>
                <p>For every floor, there’s a pillar. And for every pillar, there are great branded features in our new  building, such as color, wall graphics and conference room naming.</p>
            </div>

            {/* --------Pillar section-------- */}
            <HomePillars />

            <div className='text-content-container floor-to-ceiling'>

                <p><strong>Welcome to Ohio’s Emarald City (aka Dublin) </strong>All the Wizard of Oz references came from the branding initiative in 2013-2014, where members, clients, consultants and Warriors drew several parallels between our members’ healthcare journeys and the famed yellow-brick journey to the Emerald City. And the brains, heart and courage we provide our members along the way.</p>
                <h3>We’re not just a research-based company; we’re a research-based brand.</h3>
                {/* <img src='https://via.placeholder.com/300' className='' /> */}
            </div>
            {/* --------Lower Navigation-------- */}

            <LowerNavigation />
            {/* --------Footer Navigation-------- */}

            <Footer />
        </>
    );
}

export default Home;