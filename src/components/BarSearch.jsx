import React from 'react'
import './barSearch.css'

export const BarSearch = () => {
    /* Barra de busqueda */
    /* - Se actualizará el estado mientras se va escribiendo (onChange) */
    /* - Se realizará la busqueda al presionar la tecla ENTER */
    /* - Luego de enviar la solicitud se limpiará la barra */

  return (
    <div>
        <input type="text" name="bar-search" id="input-bar" onChange={null} onKeyUp={null} placeholder='Search a item..' />
    </div>
  )
}
