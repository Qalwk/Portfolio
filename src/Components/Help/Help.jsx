import React from 'react'
import "./Help.css"
import Button from '../Button/Button'

const Help = () => {
  return (
    <div className='help'>
        <div className='help-wrapper width-restriction'>
            <p className='help-title'>С чем могу помочь:</p>
            <div className='help-cards-wrap'>
                <div className='help-cards'>
                    <Button Text={"Лендинги"} color={1}/>
                    <Button Text={"Многостраничный сайт"} color={1}/>
                    <Button Text={"Telegram Mini App"} color={1}/>
                    <Button Text={"Brand Identify"} color={1}/>
                </div>
                <div className='help-cards'>
                    <Button Text={"Презентации"} color={1}/>
                    <Button Text={"Моб. приложения"} color={1}/>
                    <Button Text={"Motion ролики"} color={1}/>
                    <Button Text={"Оформление соц. cетей"} color={1}/>
                </div>
                <div className='help-cards'>
                    <Button Text={"Сделать сайт на Tilda"} color={1}/>
                    <Button Text={"Написать сайт на React Js"} color={1}/>
                    <Button Text={"Шаблоны для постов"} color={1}/>
                </div>
                <div className='help-cards'>
                    <Button Text={"Верстка сайта"} color={1}/>
                    <Button Text={"Дизайн мерча"} color={1}/>
                    <Button Text={"Копирайт"} color={1}/>
                    <Button Text={"Оформление мероприятий"} color={1}/>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Help
