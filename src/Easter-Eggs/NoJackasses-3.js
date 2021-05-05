import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import noJackasses from '../images/dont_be_an_ass_ko.png'

function NoJackasses() {
    return (
        <div>
            <EasterEggLanding 
            img={noJackasses}
            Title="NO JACKASSES "
            info='Enough said.'
            floor="/floor-3"
            BackTo="Back to floor 3"
            imgalt="Donkey with line cross through"
            style="floor-3-bg"

            />
        </div>
    )
}

export default NoJackasses
