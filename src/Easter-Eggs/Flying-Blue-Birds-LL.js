import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import BlueBirdsImg from '../images/3026_blue_birds.png'
import '../Pages/Pages.css'

function BlueBirds() {
    return (
        <div>
            <EasterEggLanding 
            img={BlueBirdsImg}
            Title="FLYING BLUE BIRDS"
            info='Somewhere over the rainbow, bluebirds fly and troubles melt like lemon drops. And for Kara Trott, dreams really do come true.'
            floor="/lowerLevel"
            BackTo="Back to Lower Level"
            imgalt="Small bunny"
            style="floor-LL-bg"
            eggStyle="LL-egg"

            />
        </div>
    )
}

export default BlueBirds
