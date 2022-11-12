import React from 'react'
import "./Title.css"

const Title = ({Title, Option}) => {
  return (
    <div className='title'>
        <div>{Title} {'>'} {Option}</div>
    </div>
  )
}

export { Title }