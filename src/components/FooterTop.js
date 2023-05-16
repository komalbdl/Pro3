import React, { useState } from 'react'
import FooterMiddle from './FooterMiddle';
import FooterBottom from './FooterBottom';

const FooterTop = () => {
  const [visible, setVisible] = useState(false)

  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }
  window.addEventListener('scroll', toggleVisible); 
  return (
    <div className='w-full bg-white mt-[43%] pt-6'>
      <div className='w-full border-[1px] border-gray-300 rounded-sm pt-6 flex flex-col space-y-1 items-center justify-center'>
        <p className=' text-sm'>See personalized recommendations</p>
        <button className='bg-yellow-400 text-sm font-bold py-1 px-16 rounded-md border-[1px] border-orange-500 hover:bg-yellow-300 cursor-pointer'>Sign in</button>
        <p className='text-xs text-black cursor-pointer'>New customer? <span className=' text-green-400 hover:text-orange-400'>Start here.</span></p>
      </div>
      <div className='w-full text-center text-white font-semibold bg-slate-700 py-3 mt-4 hover:bg-slate-500 cursor-pointer'>
        <p onClick={scrollToTop}>Back to top</p>
      </div>
      <FooterMiddle/>
      <FooterBottom/>
    </div>
  )
}

export default FooterTop
