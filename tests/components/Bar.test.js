import { render, screen, fireEvent } from '@testing-library/react'
import { BarSearch } from '../../src/components/bar/BarSearch'

describe('Pruebas en <BarSearch />', () => {
  test('Debe de cambiar el valor de la caja de texto.', () => {
    render(<BarSearch getGif={() => {}} />)
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Naruto' } })
    // screen.debug()

    expect(input.value).toBe('Naruto')
  })

  test('Debe de llamar onSubmitRequest si el imput tiene por lo menos un valor. ', () => {
    const inputValue = 'Naruto'
    const getGif = jest.fn()

    render(<BarSearch getGif={getGif} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: 'Naruto' } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(getGif).toHaveBeenCalled()
    expect(getGif).toHaveBeenCalledTimes(1)
    expect(getGif).toHaveBeenCalledWith(inputValue)
  })

  test('No debe de llamar el onSubmitRequest si el input está vacío', () => {
    const getGif = jest.fn()

    render(<BarSearch getGif={getGif} />)
    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(getGif).not.toHaveBeenCalled()
  })
})
