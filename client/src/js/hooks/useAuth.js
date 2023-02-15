import { useState } from 'react'

const useAuth = () => {
  const [avatar, setAvatar] = useState(
    'https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png'
  )
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

  const generateAvatar = (url) => {
    setAvatar(url)
  }

  return [isAuth, activateAuth, removeAuth, avatar, generateAvatar]
}

export default useAuth
