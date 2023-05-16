import React, { useState, useEffect } from 'react'
import ProductItems from './ProductItems'

const Product = () => {
    const [items, setItems] = useState()

    const product = async() => {
        let data = await fetch('https://fakestoreapi.com/products')
        let parseData = await data.json()
        setItems(parseData)
    }

    useEffect(()=>{
        product()
    }, [])

  return (
    <div className='grid grid-cols-3 gap-5 mt-[300px]'>
     {
        items?.map((nodes)=>{
          return <ProductItems {...nodes} key={nodes.id} />
        })
     }
    </div>
  )
}

export default Product
