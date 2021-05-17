import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import tinman from '../images/only_hadda_heart_white_OL.png'

function Sparrows() {
    return (
        <div>
            <EasterEggLanding 
            img={tinman}
            Title="I’D BE FRIENDS WITH ALL THE SPARROWS"
            info='The Tin Man joins Dorothy and Scarecrow on their journey to Oz because he wants a heart. And along the way, he shows incredible heart when it comes to watching out for his friends. In the same vein, our compassion and heart differentiate us from the competition. '
            floor="/floor-3"
            BackTo="Back to floor 3"
            imgalt="Tinman"
            style="floor-3-bg"

            />
        </div>
    )
}

export default Sparrows
