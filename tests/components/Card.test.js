import { render, screen } from '@testing-library/react'
import { Card } from '../../src/components'

describe('Pruebas en <Card />', () => {
  const title = 'Saitama'
  const url = 'https://one-punch.com/saitama.jpg'

  test('Debe hacer match con el Snapshot', () => {
    const { container } = render(
      <Card
        source={{
          title,
          url,
        }}
      />
    )

    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(
      <Card
        source={{
          title,
          url,
        }}
      />
    )

    // expect( screen.getByRole('img').src ).toBe( url )
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('Debe de mostrar el titulo en el componenete', () => {
    render(
      <Card
        source={{
          title,
          url,
        }}
      />
    )

    expect(screen.getByText(title)).toBeTruthy()
  })
})
