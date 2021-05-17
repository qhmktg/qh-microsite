import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import lollipop from '../images/210215_building_graphics_3609_lollipops.png'

function Lollipops() {
    return (
        <div>
            <EasterEggLanding 
            img={lollipop}
            Title="Lollipops"
            info='Whether they represent our culture of food, or the Lollipop Guild welcoming you to Munchkin land, these sweet treats definitely represent.'
            floor="/floor-4"
            BackTo="Back to floor 4"
            imgalt="Large lolipops"
            style="floor-4-bg"

            />
        </div>
    )
}

export default Lollipops
