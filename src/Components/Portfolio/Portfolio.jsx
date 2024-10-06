import React from 'react'
import "./Portfolio.css"
import Card from '../Card/Card'
import Button from '../Button/Button'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio-blue'></div>
      <div className='portfolio-wrapper width-restriction'>
        <p className='portfolio-title'>Портфолио</p>
        <div className='portfolio-cards'>
            <Card img={"Avto.png"} name={"Лендинг"} title={"AvtoPodbor"} doublebtn={true}
            btn1="https://avto-podbor.pro/"
            btn2="https://www.behance.net/gallery/208816683/Landing-for-AvtoPodbor"/>
            <Card img={"Velo.png"} name={"Лендинг"} title={"Velofreunde"} doublebtn={true}
            btn1="http://velofreunde.eu/"
            btn2="https://www.behance.net/gallery/201150639/Velo-Shop"/>
            <Card img={"Trade.png"} name={"Многостраничник"} title={"TradeOnACC"} 
            btn2="https://www.behance.net/gallery/208820505/TradeOnAcc-Web-Site-UIUX-Design"/>
            <Card img={"Show.png"} name={"Brand Identify"} title={"SHOW TECHNOLOGY"} 
            btn2="https://www.behance.net/gallery/195725999/Brand-Identify-Logo-Social-Media-design"/>
            <Card img={"Sei.png"} name={"Презентация"} title={"SEINETWORK"} 
            btn2="https://www.behance.net/gallery/156686879/crypto-presentation"/>
            <Card img={"ICL.png"} name={"Рекламные баннеры"} title={"ICL"} 
            btn2="https://www.behance.net/gallery/174123803/reklamnyj-banner"/>
        </div>
        <Button Text={"Посмотреть все работы"} color={1} icon={1} onClick={"https://www.behance.net/artemijgorlatov"}/>
      </div>
    </div>
  )
}

export default Portfolio
