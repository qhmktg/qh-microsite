import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import lion from '../images/210215_building_graphics_3207_lion_w_feet_OL.png'
function PutEmUp() {
    return (
        <div>
            <EasterEggLanding 
            img={lion}
            Title="Cowardly Lion"
            info='Like the Cowardly Lion, our members need strength throughout their journeys. We not only provide the strength they need to heal; we help them recognize their own strength along the way. '
            floor="/floor-2"
            BackTo="Back to floor 2"
            imgalt="Cowardly Lion"
            style="floor-2-bg"

            />
        </div>
    )
}

export default PutEmUp
