import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import bunny from '../images/210215_building_graphics_3808_bunny_rabbit.png'
import BlueBirds from '../images/3026_blue_birds.png'
import CupOfCoffee from '../images/3017_WBCO_Coffee_crop-SM-egg.png'

function Coffee() {
    return (
        <div>
            <EasterEggLanding 
            img={CupOfCoffee}
            Title="WORLDS GREATEST CUP OF COFFEE"
            info='“Great job, everybody! It’s great to be here,” says Buddy the elf. Indeed it is.'
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
