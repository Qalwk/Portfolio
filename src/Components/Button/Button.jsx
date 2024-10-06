import React, { useState } from 'react'
import "./Button.css"

const Button = ({Text, icon, color, onClick}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#FFFFFF' : (color === 1 ? '#1BB6FF' : '#FFFFFF'),
    color: isHovered ? '#1BB6FF' : (color === 1 ? '#FFFFFF' : '#1BB6FF')
  };
  return (
    <button className='btn' 
    style={buttonStyle}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={() => window.location.href = onClick}>
      <span className='btn-text' style={buttonStyle}>{Text}</span>
      {
        icon && color && isHovered==1 && <img className='btn-icon' src={"arrow.svg"} alt="arrow" />
      }
      {
        icon && color!=1 && <img className='btn-icon' src={"arrow.svg"} alt="arrow" />
      }
      {
        icon && color && isHovered==0 && <img className='btn-icon' src={"arrowwhite.svg"} alt="arrowwhite" />
      }
      {console.log(onClick)}
    </button>
  )
}

export default Button
