import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import lego from '../images/210215_building_graphics_3405_LEGOs-egg.png'

function Lego() {
    return (
        <div>
            <EasterEggLanding 
            img={lego}
            Title="LEGO MY PILLARS"
            info='We know the building blocks of our business: sanctuary, sticking with ‘em, warrioring, friendship and expertise. Shannon Skaggs takes these building blocks literally.'
            floor="/floor-4"
            BackTo="Back to floor 4"
            imgalt=""
            style="floor-4-bg"

            />
        </div>
    )
}

export default Lego
