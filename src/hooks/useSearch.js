import { useState } from 'react'

export const useSearch = (getGif) => {
  const [category, setCategory] = useState('')

  const onChangeCategory = (event) => {
    const { value } = event.target
    setCategory(value)
  }

  const onSubmitRequest = (event) => {
    event.preventDefault()
    const catg = category.trim()
    catg.length > 0 && getGif(catg)
    setCategory('')
  }

  return {
    category,
    onChangeCategory,
    onSubmitRequest,
  }
}
