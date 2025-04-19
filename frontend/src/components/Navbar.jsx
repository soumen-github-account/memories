import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full mt-1 py-1'>
      <NavLink to='/'>
          <h1 className='text-3xl font-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r to-gray-100 from-orange-500'>Few seconds</h1>
      </NavLink>
    </div>
  )
}

export default Navbar
