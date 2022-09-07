import PropTypes from 'prop-types'
import { useSearch } from '../../hooks/useSearch'
import './bar.css'

export const BarSearch = ({ getGif }) => {
  const { category, onChangeCategory, onSubmitRequest } = useSearch(getGif)

  return (
    <form
      className='container-bar'
      onSubmit={onSubmitRequest}
      aria-label='form'
    >
      <input
        type='text'
        name='bar-search'
        id='input-bar'
        onChange={onChangeCategory}
        placeholder='Search a item..'
        value={category}
      />
      <button type='submit' id='btn_search'>
        BUSCAR
      </button>
    </form>
  )
}

BarSearch.propTypes = {
  getGif: PropTypes.func.isRequired,
}
