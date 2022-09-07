import requestGif from '../../src/helpers/requestGif'

describe('Pruebas en requestGif()', () => {
  test('Debe de retornar un arreglo de gifs.', async () => {
    const gifs = await requestGif('Dragon ball')
    // console.log(gifs)

    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
      import_date: expect.any( String ),
    })
  })
})
