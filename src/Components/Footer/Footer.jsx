import React from 'react'
import "./Footer.css"
import Button from '../Button/Button'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-wrapper width-restriction'>
        <p className='help-title' style={{color:"#FFFFFF"}}>Связаться со мной</p>
        <div className='Footer-btnwrap'>
          <Button Text={"Написать в телеграм"} icon={1}/>
          <p style={{color:"#FFFFFF"}}>Готов обсудить ваш проект</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
