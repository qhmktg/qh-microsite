import '../App.css'
import React from 'react';
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
                </p>

                <p>You know it’s right when everything just falls into place. Five floors, five foundational pillars, and five senses to take it all in. Warriors weighed in on furniture and fixtures in focus groups, and we’ve incorporated our past, present and future into the design — who thought five stories would have so many stories to tell?</p>

                <p> As you journey around the building, be sure to look for the nostalgic wall graphics in unexpected places. You may find characters from the Land of Oz, nods to Kara’s favorite movies, and even the “gorilla in the room.” These “Easter eggs” are a nod to our history and brand.
                </p>
            </div>
            <div className='text-content-container'>
                <div className="section-header">
                    <h2>Defining Pillars</h2>
                    <hr className="pillar-underline" />
                </div>
                <p><strong>What is a brand pillar? </strong></p>
                <p>Just as pillars hold up a roof, brand pillars support the brand — and we have five of them. Everything we do, from our training and quality assurance to our performance evaluations and Pod structure, is based on these pillars. By staying true to them we provide the guidance and support our members need throughout every step of their healthcare journeys. </p>

                <p>For every floor, there’s a pillar. And for every pillar, there are great branded features in our new building, such as color, wall graphics and conference room naming.</p>
            </div>

            {/* --------Added section-------- */}
            {/* 
            <div className='text-content-container'>
                <div className="section-header">
                    <h2>Defining Pillars</h2>
                    <hr className="pillar-underline" />
                </div>
                <p><strong>OUR COMPANY CULTURE IS ALSO BUILT
                ON THESE FOUNDATIONAL PILLARS, AND
                    NOW, SO IS OUR HEADQUARTERS.</strong></p>
                <p>For every floor, there’s a pillar. And for every
                pillar, there are great branded features, such
                as color, wall graphics and conference room
naming, to name a few.</p>
            </div>

            <div className='text-content-container'>
            
                <p><strong>OUR COMPANY CULTURE IS ALSO BUILT
                ON THESE FOUNDATIONAL PILLARS, AND
                    NOW, SO IS OUR HEADQUARTERS.</strong></p>
                <p>For every floor, there’s a pillar. And for every
                pillar, there are great branded features, such
                as color, wall graphics and conference room
naming, to name a few.</p>
            </div> */}
            {/* --------Pillar section-------- */}
            <HomePillars />

            <div className='text-content-container floor-to-ceiling'>
                <p>
                    <strong>
                        “Toto, I don’t think we’re in Worthington anymore.”
                    </strong>
                </p>
                <p>
                Quantum Health isn’t just a research-based company &mdash; we’re a research-based brand. All the Wizard of Oz references came from the branding initiative done in 2013-2014, where members, clients, consultants and Warriors drew several parallels between our members’ healthcare journeys and the famed yellow-brick journey to the Emerald City. And the brains, heart and courage we provide our members along the way. <strong>Welcome to Ohio’s Emerald City (aka Dublin).</strong>
                    </p>
                
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