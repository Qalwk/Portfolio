import React from 'react'
import "./Stack.css"

const Stack = () => {
  return (
    <div className='Stack'>
        <div className='Stack-wrapper width-restriction'>
            <div className='Stack-one'>
                <p className='Stack-text'>
                    Привет! <br></br> 
                    Я <u style={{color:"#FFF"}}>Артемий</u>, 
                    являюсь <u style={{color:"#FFF"}}>дизайнером и разработчиком </u> 
                    в одном лице!</p>
            </div>
            <div className='Stack-two'>
                <p className='Stack-text'>Мой Стeк:</p>
                <div className='Stack-img-wrapper'>
                    <img className='Stack-img' src="Stack.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stack
