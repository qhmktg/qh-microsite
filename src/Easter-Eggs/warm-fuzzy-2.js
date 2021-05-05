import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import bunny from '../images/210215_building_graphics_3808_bunny_rabbit.png'

function WarmFuzzy() {
    return (
        <div>
            <EasterEggLanding 
            img={bunny}
            Title="WARM AND FUZZY, WITH A SECRET WEAPON"
            info='For one of the branding exercises in the 2013-2014 branding initiative, the participants were asked to bring in images that reflected who we are. One respondent came back with an image of bunnies holding assault weapons. People really responded to it. We ended up removing the weapons, of course, but the

            bunny lives on. '
            floor="/floor-2"
            BackTo="Back to floor 2"
            imgalt="Small bunny"
            style="floor-2-bg"

            />
        </div>
    )
}

export default WarmFuzzy
