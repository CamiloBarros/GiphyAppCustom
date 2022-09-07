import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { GiphyApp } from './GiphyApp'
import { Home } from './routes/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GiphyApp />} >
          <Route index element={ <Home /> } />
          {/* Routes secondary */}
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
