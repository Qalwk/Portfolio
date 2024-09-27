import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__wrapper width-restriction">
        <div className='hero__wrapper-left'>
            <p className="hero-title">
            Дизайн <br></br>
            Разработка
            </p>

        </div>
            <img className='hero-img' src="/photo.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
