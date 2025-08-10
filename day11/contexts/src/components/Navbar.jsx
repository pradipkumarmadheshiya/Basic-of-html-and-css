import React, { useContext } from 'react'
import {AuthContext} from "../context/AuthContext"
import {ThemeContext} from "../context/ThemeContext"

const Navbar = () => {
    const {isLoggedIn, setIsLoggedIn}=useContext(AuthContext)
    const {theme, setTheme}=useContext(ThemeContext)

  return (
    <nav className='flex justify-center gap-6 pt-4'>
      <button className='bg-gray-600 text-white px-4 py-1' onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn? "Logout" : "Login"}</button>
      <button className='bg-gray-600 text-white px-4 py-1' onClick={()=>setTheme(theme=="light"? "dark" : "light")}>{theme=="light"? "Dark" : "Light"}</button>
    </nav>
  )
}

export default Navbar
