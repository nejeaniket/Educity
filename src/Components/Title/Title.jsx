import React from 'react'
import './Title.css'

const Title = (props) => {

    const subTitle = props.subTitle;
    const title = props.title;

  return (
    <div className='title'>

      <p>{subTitle}</p>

      <h2>{title}</h2>

    </div>
  )
}

export default Title
