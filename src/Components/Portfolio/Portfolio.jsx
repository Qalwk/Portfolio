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
            <Card img={"Avto.png"} name={"Лендинг"} title={"AvtoPodbor"} />
            <Card img={"Velo.png"} name={"Лендинг"} title={"Velofreunde"} />
            <Card img={"Trade.png"} name={"Многостраничник"} title={"TradeOnACC"} />
            <Card img={"Show.png"} name={"Brand Identify"} title={"SHOW TECHNOLOGY"} />
            <Card img={"Sei.png"} name={"Презентация"} title={"SEINETWORK"} />
            <Card img={"ICL.png"} name={"Рекламные баннеры"} title={"ICL"} />
        </div>
        <Button Text={"Посмотреть все работы"} color={1} icon={1}/>
      </div>
    </div>
  )
}

export default Portfolio
