import React from 'react'
import './Pillar.css'
function Pillar(props) {
    return (
        <div className='pillar-container'>
            <div className="section-header">
                <h2>Pillar</h2>
                <hr className="pillar-underline" />
            </div>
            <div className='pillar-content'>
                <h1>Stick with me</h1>
                <p>We stick with our members throughout their entire healthcare journey each and every step of the way.</p>
            </div>
            <img src='https://via.placeholder.com/300' />
        </div>
    )
}

export default Pillar
