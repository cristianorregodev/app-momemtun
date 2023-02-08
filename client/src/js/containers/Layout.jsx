import React, { memo, useContext } from 'react'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { AuthContext } from '../Context/AuthContext'

export const Layout = memo(({ children }) => {
  const { isAuth } = useContext(AuthContext)

  return (
    <>
      {isAuth && <Navbar />}
      {isAuth && <Sidebar />}
      {children}
    </>
  )
})
