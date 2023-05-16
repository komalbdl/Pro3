import React,{ useEffect, useRef, useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SideNavbar from './SideNavbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import FlagIcon from '@mui/icons-material/Flag';
import {motion} from 'framer-motion'


const HeaderBottom = () => {
    const [sideNav, setSideNav] = useState(false)
    const ref=useRef()
    useEffect(()=>{
        document.body.addEventListener('click',(e)=>{
          if(e.target.contains(ref.current)){
            setSideNav(false)
          }
        })
    },[])
  return (
    <div className='flex items-center justify-between px-2 bg-[#1e2f3e] text-white font-semibold'>
      <ul className='flex space-x-3 text-sm items-center'>
        <li className='headerHover font-bold p-2' onClick={()=>setSideNav(!sideNav)}><MenuOutlinedIcon/>All</li>
        <li className='headerHover p-2'>Today's Deals</li>
        <li className='headerHover p-2'>Customer Services</li>
        <li className='headerHover p-2'>Registry</li>
        <li className='headerHover p-2'>Gift Cards</li>
        <li className='headerHover p-2'>Sales</li>
      </ul>
     
      <p className='headerHover p-2'>Shop great deals now</p>
      {sideNav && (
      <div className='w-full h-screen fixed top-0 left-0 bg-black bg-opacity-80'>
        <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.3}} className='w-[370px] h-full relative text-black bg-white z-50'>
            <div className='w-full h-[3.2rem] bg-[#1e2f3e] text-white text-lg font-bold flex items-center justify-start gap-2 pl-9'>
            <AccountCircleIcon/> <p>Hello, sign in</p>
            </div>
            <div className='overflow-y-scroll overflow-x-hidden h-full'>
           
            <SideNavbar/>
            <div className='py-5 mb-20 px-5 text-gray-500 cursor-pointer'>
      <h3 className='text-lg font-bold text-gray-700 pb-3'>Help & settings</h3>
      <ul className='space-y-5 text-sm'>
        <li className='flex items-center'>Your Account</li>
        <li className='flex items-center'><LanguageIcon/> English</li>
        <li className='flex items-center'><FlagIcon/> United States</li>
        <li className='flex items-center'>Customer Services</li>
        <li className='flex items-center'>Sign in</li>
      </ul>
    </div>
           
            </div>
            <span className='absolute top-2 left-[380px] text-white font-semibold cursor-pointer' onClick={()=>setSideNav(false)}><CloseIcon/></span>
        </motion.div>
      </div>
      )}
  
    </div>
  )
}

export default HeaderBottom
