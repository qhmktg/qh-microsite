import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import bunny from '../images/210215_building_graphics_3808_bunny_rabbit.png'

function Coffee() {
    return (
        <div>
            <EasterEggLanding 
            img={bunny}
            Title="WORLDS GREATEST CUP OF COFFEE"
            info='For one of the branding exercises in our branding initiative, the participants were asked to bring in images that reflected who we are. One participant came back with an image of bunnies holding assault weapons: “Warm and fuzzy but ready to fight for our members.”. People really responded to it. We ended up removing the weapons, of course, but the bunny lives on.'
            floor="/lowerLevel"
            BackTo="Back to Lower Level"
            imgalt="Small bunny"
            style="floor-LL-bg"
            eggStyle="LL-egg"

            />
        </div>
    )
}

export default Coffee
