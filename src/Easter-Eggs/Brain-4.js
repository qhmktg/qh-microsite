import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import scarecrow from '../images/210215_building_graphics_3434_scarecrow.png'

function Brain() {
    return (
        <div className="scarecrow">
            <EasterEggLanding 
            img={scarecrow}
            Title="SCARECROW"
            info='The first words he said after The Wizard presented him with academic credentials: “The sum of the square roots of any two sides of an isosceles triangle is equal to the square root of the remaining side.” In member-speak, this says “we have the benefits expertise necessary to see you through.”'
            floor="/floor-4"
            BackTo="Back to floor 4"
            imgalt="Scare crow"
            style="floor-4-bg"
            />
        </div>
    )
}

export default Brain
