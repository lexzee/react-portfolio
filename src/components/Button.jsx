import React from 'react'

const Button = (props) => {
  return (
    <button className={props.class}>{props.value}</button>
  )
}

export default Button