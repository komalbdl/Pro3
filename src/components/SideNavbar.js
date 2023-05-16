import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SideNavbar = () => {
  return (
    <div>
    <div className='border-b-[1px] border-b-gray-300 py-5 px-5 text-gray-500 cursor-pointer'>
    <h3 className='text-lg font-bold text-gray-700 pb-3'>Digital Content & Devices</h3>
    <ul className='space-y-4 text-sm'>
      <li className='flex items-center justify-between'>Amazon Music<KeyboardArrowRightIcon/></li>
      <li className='flex items-center justify-between'>kindly E-readers & books<KeyboardArrowRightIcon/></li>
      <li className='flex items-center justify-between'>Amazon Appstore<KeyboardArrowRightIcon/></li>
      </ul>
      </div>
    <div className='border-b-[1px] border-b-gray-300 py-5 px-5 text-gray-500 cursor-pointer'>
      <h3 className='text-lg font-bold text-gray-700 pb-3'>Shop by Department</h3>
      <ul className='space-y-4 text-sm'>
        <li className='flex items-center justify-between'>Electronics <KeyboardArrowRightIcon/></li>
        <li className='flex items-center justify-between'>Computers<KeyboardArrowRightIcon/></li>
        <li className='flex items-center justify-between'>Smart Home <KeyboardArrowRightIcon/></li>
        <li className='flex items-center justify-between'>Arts & Crafts <KeyboardArrowRightIcon/></li>
        <li className='flex items-center'>See All <KeyboardArrowDownIcon/></li>
      </ul>
    </div>
    <div className='border-b-[1px] border-b-gray-300 py-5 px-5 text-gray-500 cursor-pointer'>
      <h3 className='text-lg font-bold text-gray-700 pb-3'>Programs & features</h3>
      <ul className='space-y-4 text-sm'>
        <li className='flex items-center justify-between'>Gifts Cards<KeyboardArrowRightIcon/></li>
        <li className='flex items-center justify-between'>Shop by Interest <KeyboardArrowRightIcon/></li>
        <li className='flex items-center justify-between'>Amazon Live<KeyboardArrowRightIcon/></li>
        <li className='flex items-center justify-between'>International Shoping<KeyboardArrowRightIcon/></li>
        <li className='flex items-center'>See All <KeyboardArrowDownIcon/></li>
      </ul>
    </div>
    </div>
    
  )
}

export default SideNavbar
