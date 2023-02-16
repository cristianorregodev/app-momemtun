import { useState } from 'react'

const useAuth = () => {
  const [avatar, setAvatar] = useState(() => {
    const avatar = window.sessionStorage.getItem('avatar')
    return JSON.parse(avatar)
  })
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
    window.sessionStorage.setItem('avatar', JSON.stringify(url))
    const avatar = window.sessionStorage.getItem('avatar')

    setAvatar(JSON.parse(avatar))
  }

  return [isAuth, activateAuth, removeAuth, avatar, generateAvatar]
}

export default useAuth
