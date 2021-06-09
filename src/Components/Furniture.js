import React from 'react'
import './Furniture.css'
function Furniture(props) {
    return (
        <div className="furniture-container">
            <img className='furniture-image' src={props.img} alt={props.alt}/>
           <h3 className="furniture-headline">{props.headline}</h3> 
        </div>
    )
}

export default Furniture
