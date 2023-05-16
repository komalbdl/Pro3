import React from 'react'
// import randomImage from '../assets/banner1.jpg'

const ProductItems = ({ image, title, description, price, category }) => {
  return (
    <div className='w-full h-fit flex flex-col items-start pb-2 border-[1px] bg-white rounded-xl border-gray-400 group hover:shadow-2xl'>
      <img src={image} alt="for-test" className=' w-full mb-4'/>
      <h2 className='font-bold leading-7 text-gray-900 px-5 text-3xl mb-6'>{title}</h2>
      <p className='text-base leading-6 text-gray-500 px-5 mb-8'>{description}
      </p>
      <div className='flex items-center justify-between w-full px-5'>
        <p className='text-xs font-semibold text-gray-900'>{category}</p>
        <span className='text-xs font-normal text-orange-400 group-hover:text-orange-700 group-hover:font-medium cursor-pointer'>${price}</span>
      </div>
    </div>
  )
}

export default ProductItems
