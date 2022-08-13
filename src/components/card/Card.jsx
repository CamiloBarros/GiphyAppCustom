import React from 'react'
import './card.css'

export const Card = ({ source }) => {
  return (
    <div className='card'>
      <div className='card-container'>
        <img src={source.url} alt={source.title} className='img-gif' />
      </div>
      <div className="card-title">
        <span>{source.title}</span>
        {/* <small>{source.import_date}</small> */}
      </div>
    </div>
  )
}
