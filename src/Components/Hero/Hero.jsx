import React from 'react'
import './Hero.css'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__wrapper width-restriction">
        <div className='hero__wrapper-left'>
            <p className="hero-title">
            Дизайн <br></br>
            Разработка
            </p>
            <Button color={1} Text="Обсудить проект" icon={1} onClick="https://t.me/DrJetnik"/>
        </div>
            <img className='hero-img' src="/photo.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
