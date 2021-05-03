import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import rubbySlippers from '../images/ruby_slippers_iso_transparent-shadow.png'

function RubbySlippers() {
    return (
        <div>
            <EasterEggLanding 
            img={rubbySlippers}
            Title="Ruby Slippers"
            info='Donning her ruby red slippers, Dorothy and her new friends stuck together through the many obstacles on their journey to the Emerald City. Those special shoes also remind us that “there’s no place like home.” '
            floor="/floor-1"
            BackTo="Back to floor 1"
            imgalt=""
            style="floor-1-bg"
            />
        </div>
    )
}

export default RubbySlippers
