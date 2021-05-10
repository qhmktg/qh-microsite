import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import GorillaImage from '../images/210215_building_graphics_3269_gorilla-egg.png'
function Gorilla() {
    return (
        <div>
            <EasterEggLanding 
            img={GorillaImage}
            Title="Gorilla in the room"
            info='Back in the year 2000, “The Invisible Gorilla” was created to test selective attention. It has become one of the most famous training experiments ever, demonstrating that when we get stuck in the details, we should never lose sight of the bigger picture.'
            floor="/floor-1"
            BackTo="Back to floor 1"
            imgalt=""
            style="floor-1-bg"

            />
        </div>
    )
}

export default Gorilla
