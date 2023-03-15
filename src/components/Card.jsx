import React from 'react'

const Card = ({ img, title, description }) => {
    return (
        <div className='card'>
            <div className='card_img'>
                <img src={img} alt="logo" />
            </div>
            <div className='card_text'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card