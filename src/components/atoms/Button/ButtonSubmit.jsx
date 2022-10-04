import React from 'react'
import './buttonSubmit.css'

const Button = ({ ...props }) => {
  return(<button type="button" {...props} />) 
}

export default Button;