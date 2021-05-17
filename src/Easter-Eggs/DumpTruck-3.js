import React from 'react'
import EasterEggLanding from'./Easter-Egg-Landing'
import treePillar from '../images/210215_building_graphics_3091_f_tree.png'

function DumpTruck() {
    return (
        <div>
            <EasterEggLanding 
            img={treePillar}
            Title="Christmas Vacation Scene"
            info='Aunt Bethany hears a noise. Clark leans in, and in some more. That memorable scene from Christmas Vacation features a squirrel diving out of a Christmas tree and wreaking havoc on the Griswolds’ home. For Kara, this holiday movie — and this scene especially — are evergreen.'
            floor="/floor-3"
            BackTo="Back to floor 3"
            imgalt="Christmas tree"
            style="floor-3-bg"

            />
        </div>
    )
}

export default DumpTruck
