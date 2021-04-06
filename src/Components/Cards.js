import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className="cards">
            <h1> check out these epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">
                        <CardItem 
                        src='https://via.placeholder.com/300' 
                        text="Explore the hidden waterfall"
                        label='Adventure'
                        path='/services'/>
                        <CardItem 
                        src='https://via.placeholder.com/300' 
                        text="Explore the hidden waterfall"
                        label='Adventure'
                        path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
