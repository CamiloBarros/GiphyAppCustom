import React from 'react'
import './card.css'

export const Card = ({ source }) => {
  return (
    <a className='card' href={source.url} target='_blank'>
      <div className='card-container'>
        <img src={source.url} alt={source.title} className='img-gif' />
      </div>
    </a>
  )
}
