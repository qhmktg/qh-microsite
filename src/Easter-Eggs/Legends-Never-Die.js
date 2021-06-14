import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import legends from '../images/3014_legends-Card.png'

function Legends() {
    return (
        <div>
            <EasterEggLanding 
            img={legends}
            Title="LEGENDS NEVER DIE"
            info='In the immortal words of Babe Ruth, “Heroes get remembered, but legends never die.”'
            floor="/lowerLevel"
            BackTo="Back to Lower Level"
            imgalt="Small bunny"
            style="floor-LL-bg"
            eggStyle="LL-egg"

            />
        </div>
    )
}

export default Legends
