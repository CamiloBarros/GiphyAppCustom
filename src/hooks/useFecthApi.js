import { useEffect, useState } from "react"
import requestGif from "../helpers/requestGif"

export const useFecthApi = ( value = 'Dragon Ball') => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState( true )

  const getGif = async ( value ) => {
    const newSetGifs = await requestGif(value)
    setGifs(newSetGifs)
    setIsLoading( false )
  }

  useEffect(() => {
    getGif( value )
  }, [])

  
  return {
    gifs,
    getGif,
    isLoading
  }
}