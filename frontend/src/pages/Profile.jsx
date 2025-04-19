import React, { useEffect, useState } from 'react'
import { assets, friends } from '../assets/assets'
import { FaDivide, FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './profile.css'
import { useParams } from 'react-router-dom';
import Middle from '../components/Middle';
const Profile = () => {
  const {frid} = useParams()
  const [frinfo, setFrinfo] = useState(null)
  const fetchfrInfo = async()=>{
    const frinfo = friends.find(fr => fr._id === frid)
    setFrinfo(frinfo)
  }
  useEffect(()=>{
    fetchfrInfo()
  },[frinfo],[frid])


  return frinfo && (
    <div>
    <div className='min-h-48 hd w-full rounded-xl mt-4 border border-t-orange-500'>
      <div className='flex px-8 py-2 gap-10 max-sm:flex-col'>
            <img src={frinfo.image} className='w-30 h-30 rounded-full' alt="" />
        <div className='flex items-center text-start justify-center'>
            <p>{frinfo.about}</p>
        </div>
      </div>
      <div className='flex w-full text-2xl py-5 px-5 items-center justify-center gap-5'>
        <FaFacebook className='cursor-pointer hover:text-cyan-500'/>
        <FaInstagramSquare className='cursor-pointer hover:text-cyan-500'/>
        <FaFacebookMessenger className='cursor-pointer hover:text-cyan-500'/>
        <FaLinkedin className='cursor-pointer hover:text-cyan-500'/>
        <FaTwitter className='cursor-pointer hover:text-cyan-500'/>
      </div>
    </div>

    </div>
  )
}

export default Profile
