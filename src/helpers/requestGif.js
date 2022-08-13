import dataFormated from "./dataFormated"

export default async (value) => {
  /* Peticion */
  const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=yNH5ySOiYmsZrdM4uykIkbhYE0ffoIcJ&q=${value}&limit=10`

  const response = await fetch(URL_API)
  const { data } = await response.json()
  /* Formatear o parsear data */
  return dataFormated(data)
}