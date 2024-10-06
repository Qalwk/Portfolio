import React from 'react'
import './Hero.css'
import Button from '../Button/Button'

const Hero = () => {
  const handleButtonClick = () => {
    // Replace 'https://your-website.com' with the actual URL
    window.location.href = 'https://t.me/DrJetnik'; 
  };

  return (
    <div className='hero'>
      <div className="hero__wrapper width-restriction">
        <div className='hero__wrapper-left'>
            <p className="hero-title">
            Дизайн <br></br>
            Разработка
            </p>
            <div className='btn-wrap' onClick={handleButtonClick}>
              <Button color={1} Text="Обсудить проект" icon={1}/>
            </div>
            {/* <button onClick={alert("asd")}></button> */}
        </div>
        <img className='hero-img' src="/photo.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
