import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { InicioSesion } from '../../pages/InicioSesion'
import { Profile } from '../../pages/Profile'
import { Welcome } from '../../pages/Welcome'
import { Layout } from '../containers/Layout'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
