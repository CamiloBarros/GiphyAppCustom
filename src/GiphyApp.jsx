import { BarSearch, Grid } from './components'
import { useFecthApi } from './hooks/useFecthApi'

/* KEY_API: yNH5ySOiYmsZrdM4uykIkbhYE0ffoIcJ */

export const GiphyApp = () => {

  const { gifs, getGif, isLoading } = useFecthApi()

  return (
    <div>

      <h1><span id='h1-letter'>G</span>iphy<span id='h1-letter'>A</span>pp</h1>

      <BarSearch getGif={getGif} />

      <Grid gifs={gifs} />

    </div>
  )
}
