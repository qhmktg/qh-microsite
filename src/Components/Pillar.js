import React from 'react'
import './Pillar.css'

const STYLES =['pillarGreen', 'pillarYellow', 'pillarBlue', 'pillarOrange', 'pillarPurple'];

function Pillar(props) {
    const checkPillarStyle = STYLES.includes(props.pillarStyle) ? props.pillarStyle : STYLES[0];

    return (
        <div className='pillar-container'>
            <div className="section-header">
                <h2>Pillar</h2>
                <hr className="pillar-underline" />
            </div>
            <div className='pillar-content'>
                <h1 className={`${checkPillarStyle}`}>{props.pillar}</h1>
                <p>{props.pillarCopy}</p>
            </div>
            <img className="pillar" src={props.pillarImage} />
        </div>
    )
}

export default Pillar
