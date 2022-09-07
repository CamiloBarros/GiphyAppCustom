import { BarSearch, Grid } from '../components'
import { useFecthApi } from '../hooks/useFetchApi'

export const Home = () => {
  const { gifs, getGif } = useFecthApi()

  return (
    <div>
      <h1>
        <span id='h1-letter'>G</span>iphy<span id='h1-letter'>A</span>pp
      </h1>

      <BarSearch getGif={getGif} />
      <Grid gifs={gifs} />
    </div>
  )
}
