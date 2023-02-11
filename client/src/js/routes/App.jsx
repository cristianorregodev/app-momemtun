import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login, Home, Profile, TextCompletion, Welcome, Register, Query } from '../../pages'
import { GenerateText } from '../../pages/GenerateText'

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
            <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!isAuth ? <Register /> : <Navigate to="/" />} />
            <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/" />} />
            <Route path="/welcome" element={isAuth ? <Welcome /> : <Navigate to="/" />} />
            <Route
              path="/text-generator"
              element={isAuth ? <TextCompletion /> : <Navigate to="/" />}
            />
            <Route path="/query" element={isAuth ? <Query /> : <Navigate to="/" />} />
            <Route path="/generate-text" element={isAuth ? <GenerateText /> : <Navigate to="/" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
