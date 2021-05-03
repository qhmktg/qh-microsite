import React from 'react'
import './HomePillars.css'
import stickWithEm from '../images/HP_Stick_with_Em.png';
import Warrior from '../images/HP_Warrior.png';
import Friendship from '../images/HP_Friendship.png';
import Expertise from '../images/HP_Expertise.png';
import Sanctuary from '../images/HP_Sanctuary.png';


function HomePillars() {
    return (
        <>
            <div className="container">
                <div className="title">
                    <h2>Our Pillars</h2>
                </div>
                <div className="home-pillar-container">
                    <div className="pillar-cards">
                        <img className="pillar-img" src={stickWithEm} />
                        <h3>Stick With 'Em</h3>
                    </div>
                    <div className="pillar-cards">
                        <img className="pillar-img" src={Warrior} />
                        <h3>Warrior</h3>

                    </div>
                    <div className="pillar-cards">
                        <img className="pillar-img" src={Friendship} />
                        <h3>Friendship</h3>
                    </div>
                    <div className="pillar-cards">
                        <img className="pillar-img" src={Expertise} />
                        <h3>Expertise</h3>

                    </div>
                    <div className="pillar-cards orphan-card">
                        <img className="pillar-img" src={Sanctuary} />
                        <h3>Sanctuary</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePillars
