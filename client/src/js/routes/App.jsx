import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { Login } from '../../pages/Login'
import { Profile } from '../../pages/Profile'
import { Welcome } from '../../pages/Welcome'
import { Layout } from '../containers/Layout'
import { AuthContext } from '../Context/AuthContext'
import useAuth from '../hooks/useAuth'

export const App = () => {
  const [isAuth, activateAuth, removeAuth] = useAuth()
  return (
    <AuthContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
