import { render, screen } from '@testing-library/react'
import { useFecthApi } from '../../src/hooks/useFetchApi'
import { Home } from '../../src/routes/Home'

jest.mock('../../src/hooks/useFetchApi')

describe('Pruebas en <Home />', () => {
  test('Debe de mostrar los items que se cargan desde el useFecthApi', () => {
    const gifs = [
      {
        id: 'A01',
        title: 'Naruto',
        url: 'https://localhost/naruto.jpg',
        import_date: '17/12/2015',
      },
      {
        id: 'A02',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
        import_date: '11/12/2015',
      },
    ]

    useFecthApi.mockReturnValue({
      gifs,
      getGif: () => {},
    })
    render(<Home />)

    expect( screen.getAllByRole('img').length ).toBe( 2 )
    screen.debug()
  })
})
