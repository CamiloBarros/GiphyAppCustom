export default (data) => {
  return data.map((element) => {
    return {
      id: element.id,
      title: element.title,
      url: element.images.downsized_medium.url
      // url: element.embed_url,
    }
  })
}