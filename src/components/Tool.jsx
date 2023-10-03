import React from 'react'

const Tool = (props) => {
  return (
    <div className='tool'>
      <img src={props.image} alt="" />
      <a href={props.link}><p>{props.value}</p></a>
    </div>
  )
}

export default Tool