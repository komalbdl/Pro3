import React from 'react'

const FooterBottomList = ({title, products}) => {
  return (
    <div className='text-xs footerLink'>
      <h5 className=' font-semibold text-white'>{title}</h5>
      <ul>
        <li className=' font-normal text-[#999999]'>{products}</li>
      </ul>
    </div>
  )
}

export default FooterBottomList
