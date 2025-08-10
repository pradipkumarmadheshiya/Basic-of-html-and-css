import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {
    const {isLoggedIn}=useContext(AuthContext)
  return (
    <div>
      <h2 className='text-center text-2xl my-6'>{isLoggedIn? "Welcome User" : "Please Login"}</h2>
    </div>
  )
}

export default Home
