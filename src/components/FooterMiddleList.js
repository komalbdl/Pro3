import React from 'react'

const FooterMiddleList = ({title, listItems}) => {
  return (
    <div>
       <h3 className=' text-[16px] font-bold mb-[14px] mt-[6px]'>{title}</h3>
        <ul>
          {
            listItems.map((item)=>item.listData.map((data)=>(
              <li className='footerLink text-sm py-1'>{data}</li>
            )))
          }
        </ul>
    </div>
  )
}

export default FooterMiddleList
