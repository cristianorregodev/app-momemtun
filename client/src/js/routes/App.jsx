import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login, Home, Profile, TextCompletion, Welcome, Register } from '../../pages'
import { CodeGeneration } from '../../pages/CodeGeneration'
import { ImageGeneration } from '../../pages/ImageGeneration'

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
            <Route path="/" element={!isAuth ? <Home /> : <Navigate to="/profile" />} />
            <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!isAuth ? <Register /> : <Navigate to="/" />} />
            <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/" />} />
            <Route path="/welcome" element={isAuth ? <Welcome /> : <Navigate to="/" />} />
            <Route
              path="/text-generator"
              element={isAuth ? <TextCompletion /> : <Navigate to="/" />}
            />
            <Route
              path="/image-generator"
              element={isAuth ? <ImageGeneration /> : <Navigate to="/" />}
            />
            <Route
              path="/code-generator"
              element={isAuth ? <CodeGeneration /> : <Navigate to="/" />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
