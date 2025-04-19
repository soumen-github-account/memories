import React from 'react'
import { assets, friends } from '../assets/assets'
import './middle.css'
import { NavLink, useNavigate } from 'react-router-dom'
const Middle = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-4 my-10 text-gray-900 md:mx-10'>
        {/* <h2 className='text-white font-medium font-serif text-2xl'><span className='text-3xl'>--</span> Friend List</h2> */}
      <div className='w-full bx relative grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 gap-y-6 px-3 sm:px-0'>
        {
          friends.map((item,index)=>(
              <div onClick={()=>{navigate(`/profile/${item._id}`); scrollTo(0,0)}} className='lines border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-blue-50 w-full' src={item.image} alt="" />
              </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Middle
