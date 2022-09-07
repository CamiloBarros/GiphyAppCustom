import { renderHook, waitFor } from "@testing-library/react"
import { useFecthApi } from "../../src/hooks/useFetchApi"

describe('Pruebas en el hook useFetchApi', () => { 
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook( () => useFecthApi('Naruto') )
    const { gifs, isLoading } = result.current

    expect( gifs.length ).toBe( 0 )
    expect( isLoading ).toBeTruthy()
  })

  test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {
    const { result } = renderHook( () => useFecthApi('Naruto') )

    await waitFor(
      () => expect( result.current.gifs.length ).toBeGreaterThan( 0 )
    )

    const { gifs, isLoading } = result.current

    expect( gifs.length ).toBeGreaterThan( 0 )
    expect( isLoading ).toBeFalsy()
  })
})