import React from 'react'
import "./Card.css"
import Button from '../Button/Button'

const Card = ({img, name, title, btn1, btn2}) => {
  return (
    <div className='Card'>
      <div className='Card-wrapper'>
        <div className='Card-top'>
            <img src={img} alt="" />
            <span style={{color:"#383838", fontFamily:"SF Pro Display"}}>{name}</span>
        </div>
        <p className='help-title'>{title}</p>
        <div className='Card-btn'>
            <Button Text={"Открыть сайт"} color={1} icon={1} />
            <Button Text={"Открыть behance"} color={1} icon={1} />
        </div>
      </div>
    </div>
  )
}

export default Card
