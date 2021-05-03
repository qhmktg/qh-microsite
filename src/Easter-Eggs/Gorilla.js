import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'

function Gorilla() {
    return (
        <div>
            <EasterEggLanding 
            img='https://via.placeholder.com/300'
            Title="Gorilla in the room"
            info='Back in the year 2000, “The Invisible Gorilla” was created to test selective attention. It has become one of the most famous training experiments ever, demonstrating that when we get stuck in the details, we should never lose sight of the bigger picture.'
            floor="/floor-1"
            BackTo="Back to floor 2"
            imgalt=""
            style="floor-1-bg"

            />
        </div>
    )
}

export default Gorilla
