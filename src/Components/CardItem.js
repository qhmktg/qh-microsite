import React from 'react'
import { Link } from 'react-router-dom'

const STYLES =['green', 'yellow', 'blue', 'orange', 'purple'];




function CardItem(props) {
  const checkCardStyle = STYLES.includes(props.CardStyle) ? props.CardStyle : STYLES[0];

    return (
        <>
        <li className='cards__item'>
          <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap' >
              <img
                className='cards__item__img'
                alt={props.alt}
                src={props.src}
              />
            </figure>
            <div className={`cards__item__info ${checkCardStyle}`}>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    )
}

export default CardItem
