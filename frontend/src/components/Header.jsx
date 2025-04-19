import React from 'react'
import './header.css'
import { assets, header } from '../assets/assets'
const Header = () => {
  return (
    <div className='min-h-96 hov rounded-xl mt-4 w-full bg-center bg-cover flex items-center justify-center overflow-hidden' style={{backgroundImage: "url('/header.jpg')"}}>
      <div className='px-2'>
        {/* <h3 className='text-3xl mb-2 font-serif font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-orange-500'>Hello Friends 👋</h3> */}
        <p>"The most beautiful things are not associated with money; they are memories and moments."</p>
        <div className='scroll1 flex imgbox'>
            <div className='flex gap-2'>
              {
                header.slice(0,4).map((item,index)=>(
                  <img className='rounded-xl w-50 h-30' src={item.img} key={index} alt="" />
                ))
              }
            </div>   
        </div>

        <div className='scroll2 flex imgbox'>
          <div className='flex gap-2'>
                {
                  header.slice(4,10).map((item,index)=>(
                    <img className='rounded-xl w-50 h-30' src={item.img} key={index} alt="" />
                  ))
                }
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header
