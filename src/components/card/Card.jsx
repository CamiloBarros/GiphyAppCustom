import './card.css'
import PropTypes from 'prop-types'

export const Card = ({ source }) => {
  return (
    <div className='card'>
      <div className='card-container'>
        <img src={source.url} alt={source.title} className='img-gif' />
      </div>
      <div className='card-title'>
        <span>{source.title}</span>
        {/* <small>{source.import_date}</small> */}
      </div>
    </div>
  )
}

/* 
  TAREA
  
  1. Añadir los PropTypes 
    a. title obligatorio
    b. url obligatorio

  2. Evaluar snapshots


*/

Card.propTypes = {
  source: PropTypes.object.isRequired
}