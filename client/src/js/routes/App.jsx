import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {
  Login,
  Home,
  Profile,
  TextGeneration,
  Welcome,
  Register,
  History,
  ImageGeneration,
  CodeGeneration,
  CodeResult,
  TextResult,
  ImageResult,
  ResetPassword,
} from '../../pages'

import { Layout } from '../containers/Layout'
import { AuthContext } from '../Context/AuthContext'
import useAuth from '../hooks/useAuth'

export const App = () => {
  const [isAuth, activateAuth, removeAuth, avatar, generateAvatar] = useAuth()
  return (
    <AuthContext.Provider value={{ isAuth, activateAuth, removeAuth, avatar, generateAvatar }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={!isAuth ? <Home /> : <Navigate to="/profile" />} />
            <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/" />} />
            <Route
              path="/reset-password"
              element={!isAuth ? <ResetPassword /> : <Navigate to="/" />}
            />
            <Route path="/register" element={!isAuth ? <Register /> : <Navigate to="/" />} />
            <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/" />} />
            <Route path="/welcome" element={isAuth ? <Welcome /> : <Navigate to="/" />} />
            <Route
              path="/text-generator"
              element={isAuth ? <TextGeneration /> : <Navigate to="/" />}
            />

            <Route
              path="/image-generator"
              element={isAuth ? <ImageGeneration /> : <Navigate to="/" />}
            />
            <Route
              path="/code-generator"
              element={isAuth ? <CodeGeneration /> : <Navigate to="/" />}
            />
            <Route path="/history" element={isAuth ? <History /> : <Navigate to="/" />} />
            <Route path="/images/:id" element={isAuth ? <ImageResult /> : <Navigate to="/" />} />
            <Route path="/code/:id" element={isAuth ? <CodeResult /> : <Navigate to="/" />} />
            <Route path="/text/:id" element={isAuth ? <TextResult /> : <Navigate to="/" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
