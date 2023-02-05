import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../../pages/Home'
import { InicioSesion } from '../../pages/InicioSesion';
export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<InicioSesion />} />
    </Routes>
    </BrowserRouter>
  )
}
