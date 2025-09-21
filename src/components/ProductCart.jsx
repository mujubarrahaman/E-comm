import React, { useContext } from 'react'
import { productContainer } from '../App'
import productsData from "../product.json"
import Star from './Star'


const ProductCart = ({product}) => {

  const {filterProducts , addToCart } = useContext(productContainer)
  return (
    <div className=' shoe_container p-4 hover:shadow-xl transition-all duration-200 mt-4' >

      <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
      <h3 className='mb-2 text-lg font-semibold ' style={{color:"black"}}>{product.name.charAt(0).toUpperCase()+product.name.slice(1)}</h3>
      {/* <p className='text-gray-500 mb-1 '  style={{color:"#613A7A"}}>{product.brand.charAt(0).toUpperCase()+product.brand.slice(1)} | {product.color} </p> */}
      {/* <p className='text-gray-500 mb-1 '  style={{color:"#613A7A"}}>{product.ram} GB RAM | {product.storage} GB</p>
      <p className='text-gray-500 mb-4 '  style={{color:"#613A7A"}}>{product.display} Display</p> */}
     
      <Star noOfStars={5}/>
     
      <div className='full_content flex justify-between items-center'>
        <div className='shoe_container_two'>
          <p className='text-xl font-bold text-blue-800' style={{color:"#46275A"}}> ₹ {product.price} </p>
          <p className='text-sm text-gray-400 line-through' style={{color:"#46275A"}}>₹ {product.mrp} </p>
         
        </div>
        <button className='bg-gray-200 font-bold text-sm rounded text-black px-4 py-2 hover:bg-blue-500 cursor-pointer' onClick={()=>addToCart(product)}>Add to Cart</button>
      
      </div>


    </div>
  )
}

export default ProductCart