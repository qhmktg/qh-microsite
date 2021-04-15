import '../App.css'
import React from 'react';
import HeroSection from '../Components/HeroSection';
// import Cards from '../Cards';
import Footer from '../Components/Footer'
import LowerNavigation from '../Components/LowerNavigation';
import '../Components/TextContent.css'

function Home(){
    return(
        <>
        <HeroSection 
        head={[<span className="Welcome">Welcome</span>, <br />, <span className="Home">Home</span>]}

        body="Making"
        label='Adventure'
        className='mobile-only'
        />
        {/* <Cards/> */}
        {/* --------Middle Content-------- */}
        <div className='text-content-container'>
             <h2>“It’s not the destination, it’s the journey,” people say. For us, it’s both.</h2>
            <p>Making this building feel like our home was a journey in itself. However, some things just fell into place like it was meant to be: five floors; five foundational pillars. Also, we brought some surprises over from Huntington Park to make it feel like home right away. These “Easter eggs” are nods to Quantum Health’s earlier years. Take a journey around the building to find all the surprises and get acquainted to your new home. </p>
            <p>At first, it may seem like you’ve been zapped into Oz, but that’s not (completely) it. There’s a backstory that begins during a 2013 branding workshop — a true one about member journeys and the brains, heart and courage it takes to guide those members through. It also involves armed bunnies.</p>
            <p>You are the heart and soul of this company. You are the reason we succeed. You are how we change the world. That’s why we’re building a destination where you can thrive. </p>
            <h3>Welcome to the Emerald City. (aka Dublin, Ohio)</h3>
        </div>
        <div className='text-content-container'>
             <h2>Our Pillars</h2>
            <p>Making this building feel like our home was a journey in itself. However, some things just fell into place like it was meant to be: five floors; five foundational pillars. Also, we brought some surprises over from Huntington Park to make it feel like home right away. These “Easter eggs” are nods to Quantum Health’s earlier years. Take a journey around the building to find all the surprises and get acquainted to your new home. </p>
            <p>At first, it may seem like you’ve been zapped into Oz, but that’s not (completely) it. There’s a backstory that begins during a 2013 branding workshop — a true one about member journeys and the brains, heart and courage it takes to guide those members through. It also involves armed bunnies.</p>
            <p>You are the heart and soul of this company. You are the reason we succeed. You are how we change the world. That’s why we’re building a destination where you can thrive. </p>
            <h3>Welcome to the Emerald City. (aka Dublin, Ohio)</h3>
        </div>
        {/* --------Image Content-------- */}
        <div className='text-content-container floor-to-ceiling'>
        <div className="section-header">
                <h2>Pillar</h2>
                <hr className="pillar-underline" />
            </div>
             <p><strong>The lobby floor</strong> — our modernized nod to the winding yellow-brick road, reminiscent of the Quantum Health logo.</p>
            <p><strong>The Warrior creed is ever present</strong> — on the lobby walls and the frosted windows of every large conference room.</p>
            <p><strong>Look at the ceiling</strong> — the baffles aren’t just for looks; they help absorb light and sound for better ambiance and noise reduction so you can stick to whatever you’re doing, without interruption.</p>
            <img src='https://via.placeholder.com/300' className=''/>
        </div>
        
                <LowerNavigation />

        <Footer />
        </>
    );
}

export default Home;