import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile/:frid' element={<Profile/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
