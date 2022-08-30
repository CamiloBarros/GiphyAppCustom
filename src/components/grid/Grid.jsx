import { Card } from '../card/Card'
import './grid.css'

export const Grid = ({ gifs }) => {
  return (
    <div className='container-grid'>
      {gifs &&
        gifs.map((element) => <Card source={element} key={element.id} />)}
    </div>
  )
}
