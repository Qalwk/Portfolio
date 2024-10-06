import React from 'react'
import "./Card.css"
import Button from '../Button/Button'

const Card = ({img, name, title, btn1, btn2, doublebtn}) => {


  return (
    <div className='Card'>
      <div className='Card-wrapper'>
        <div className='Card-top'>
            <img src={img} alt="" />
            <span className='card-name' style={{color:"#383838", fontFamily:"SF Pro Display"}}>{name}</span>
        </div>
        <p className='help-title'>{title}</p>
        <div className='Card-btn'>
            {doublebtn && <Button Text={"Открыть сайт"} color={1} icon={1} onClick={btn1}/>}
            <Button Text={"Открыть behance"} color={1} icon={1} onClick={btn2}/>
            {console.log(btn2)}
        </div>
      </div>
    </div>
  )
}

export default Card
