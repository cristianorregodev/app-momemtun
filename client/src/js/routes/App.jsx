import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../../pages/Home'
import { InicioSesion } from '../../pages/InicioSesion';
import { Profile } from '../../pages/Profile';
export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<InicioSesion />} />
        <Route path='/profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}
