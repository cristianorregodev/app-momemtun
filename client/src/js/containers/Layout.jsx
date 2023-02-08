import React, { memo } from 'react'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Layout = memo(({ children }) => {
  const isAuth = true
  return (
    <>
      <Navbar />
      {isAuth && <Sidebar />}
      {children}
    </>
  )
})
