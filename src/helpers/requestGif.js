import dataFormated from './dataFormated'

export default async (value) => {
  const apiKey = 'yNH5ySOiYmsZrdM4uykIkbhYE0ffoIcJ'

  /* Peticion */
  const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=${
    // import.meta.env.VITE_API_KEY
    apiKey
  }&q=${value}&limit=10`

  const response = await fetch(URL_API)
  const { data } = await response.json()

  /* Formatear o parsear data y retornar */
  return dataFormated(data)
}
