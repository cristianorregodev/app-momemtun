import { useState } from 'react'

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(() => {
    const user = window.sessionStorage.getItem('userAuth')
    return JSON.parse(user)
  })

  const activateAuth = (userAuth) => {
    window.sessionStorage.setItem('userAuth', JSON.stringify(userAuth))
    const user = window.sessionStorage.getItem('userAuth')

    setIsAuth(JSON.parse(user))
  }
  const removeAuth = () => {
    window.sessionStorage.removeItem('userAuth')
    setIsAuth(false)
  }

  return [isAuth, activateAuth, removeAuth]
}

export default useAuth
