import React, { useState } from 'react'
import Logo from '../assets/Amazon-Logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeaderBottom from './HeaderBottom';


const Header = () => {
    const [showAll, setShowAll]=useState(false) 
    const itemList = [
        {_id:100,title:'All Departments'},
        {_id:101,title:'Arts & Craft'},
        {_id:102,title:'Automotive'},
        {_id:103,title:'Baby'},
        {_id:104,title:'Beauty & Personal Care'},
        {_id:105,title:'Books'},
        {_id:106,title:"Boys' Fashion"},
        {_id:107,title:'Computers'},
        {_id:108,title:'Deals'},
        {_id:109,title:'Digital Music'},
        {_id:110,title:'Electronics'},
        {_id:111,title:"Girl's Fashion"},
        {_id:112,title:'Health & Household'},
        {_id:113,title:'Home & Kitchen'},
        {_id:114,title:'Industrial & Sceintific'},
        {_id:115,title:'Kindle store'},
        {_id:116,title:'Luggage'},
        {_id:117,title:"Men's Fashion"},
        {_id:118,title:'Movie & Tv'},
        {_id:119,title:'Music, CD & Vinyl'},
        {_id:120,title:'Pet Supplies'},
        {_id:121,title:'Prime Videos'},
        {_id:122,title:'Software'},
        {_id:123,title:'Sports & Outdoors'},
        {_id:124,title:'Tools & Home Inprovements'},
        {_id:125,title:'Toys & Games'},
        {_id:126,title:'Video Games'},
        {_id:127,title:"Women's Fashion"},
    ]
  return (
    <div className='w-full sticky top-0'>
     
<div className='w-full text-white bg-[#111921] px-2 py-1 flex items-center gap-3 relative z-100'>
   <div className='headerHover'>
   <img src={Logo} alt="" className='w-[90px]'/>
   </div>
   <div className='headerHover p-2 '>
       <LocationOnOutlinedIcon/>
       <p className='text-sm font-light flex flex-col'>Deliver to <span className='text-sm font-bold pr-[10px]'>Chandigarh University</span></p>
   </div>

  <div className='h-10 relative flex flex-grow rounded-md'>
   
   <span className='  bg-gray-200 hover:bg-gray-400 flex items-center justify-center w-14 h-full text-xs text-black  rounded-tl-md rounded-bl-md p-2' onClick={()=>setShowAll(!showAll)}>All<span></span>
  <ArrowDropDownOutlinedIcon/>
   </span>
    {showAll && (
    <div>
        <ul className='absolute w-64 h-[25rem] overflow-y-scroll text-sm overflow-x-hidden bg-white text-black top-10 left-0 flex flex-col border-[1px] border-slate-300 cursor-pointer'>
           {itemList.map((item)=>(
                <li className='listHover' key={item._id}>{item.title}</li>
           ))}
        </ul>
    </div> 
   )} 
   <input className='flex-grow border-none outline-none text-[#111921] text-base px-2' type="text" placeholder='Search Amazon'/>
   <span className='flex items-center justify-center w-12 h-full rounded-tr-md rounded-br-md bg-orange-300 hover:bg-orange-400 text-black'>
    <SearchOutlinedIcon/>
   </span>
  </div>
  <div className='flex items-end justify-center headerHover p-2'>
    <p className='flex flex-col text-xs'>Hello, sign in <span className='text-sm font-bold'>Account & List</span></p>
    <ArrowDropDownOutlinedIcon/>
  </div>
  <div className='headerHover p-2'>
    <p className='flex flex-col text-xs'>Returns <span className='text-sm font-bold'>& Orders</span></p>
  </div>
    <div className='relative p-2 flex items-center justify-center headerHover'>
    <ShoppingCartOutlinedIcon/><span className='absolute left-5 font-bold -top-[0.45rem] text-orange-500 '>0</span><span className='text-sm font-bold'>Cart</span>
    </div>
</div>
<HeaderBottom/>
</div>
  )
}

export default Header

