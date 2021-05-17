import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import bunny from '../images/210215_building_graphics_3808_bunny_rabbit.png'

function WarmFuzzy() {
    return (
        <div>
            <EasterEggLanding 
            img={bunny}
            Title="THE BUNNY"
            info='For one of the branding exercises in our branding initiative, the participants were asked to bring in images that reflected who we are. One respondent came back with an image of bunnies holding assault weapons: warm and fuzzy but ready to fight for our members. People really responded to it. We ended up removing the weapons, of course, but the bunny lives on.'
            floor="/floor-2"
            BackTo="Back to floor 2"
            imgalt="Small bunny"
            style="floor-2-bg"

            />
        </div>
    )
}

export default WarmFuzzy
