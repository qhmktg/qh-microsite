import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import crows from '../images/210215_building_graphics_3135_f.png'

function Birds() {
    return (
        <div className="the-birds">
            <EasterEggLanding 
            img={crows}
            Title="The Birds"
            info='Kara Trott doesn’t scare easily. Not of being an entrepreneur. Not of impressing investors with her research. And definitely not as a child watching her favorite Hitchcock movie, The Birds, or as an adult taking on the unchosen, impersonal experience consumers face when they are thrust into the complex world of healthcare.'
            floor="/floor-2"
            BackTo="Back to floor 2"
            imgalt="Group of crows"
            style="floor-2-bg"

            />
        </div>
    )
}

export default Birds
