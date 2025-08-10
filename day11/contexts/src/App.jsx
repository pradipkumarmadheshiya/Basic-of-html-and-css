import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/ThemeContext'
import Footer from './Footer'
import Home from './components/Home'
import Product from './components/Product'

const App = () => {
  const {theme}=useContext(ThemeContext)

  return (
    <div className={`${theme=="light" ? "" : "bg-gray-300"}`}>
      <Navbar/>
      <Home/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App
