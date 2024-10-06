import React from 'react'
import "./Footer.css"
import Button from '../Button/Button'

const Footer = () => {
  const handleButtonClick = () => {
    // Replace 'https://your-website.com' with the actual URL
    window.location.href = 'https://t.me/DrJetnik'; 
  };

  return (
    <div className='Footer'>
      <div className='Footer-wrapper width-restriction'>
        <p className='help-title' style={{color:"#FFFFFF"}}>Связаться со мной</p>
        <div className='Footer-btnwrap'>
          <div onClick={handleButtonClick}>
            <Button Text={"Написать в телеграм"} icon={1}/>
          </div>
          <p className='footer-info'>Готов обсудить ваш проект</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
