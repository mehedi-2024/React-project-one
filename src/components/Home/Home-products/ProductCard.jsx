
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({data}) => {
  return (
    <div className='bg-white p-5 rounded-2xl text-black shadow-sm flex flex-col'>
        <img src={data.image} className='w-60 object-cover rounded-xl mb-5 shadow-sm mx-auto' alt="" />
        <h2 className='text-xl font-bold'>{data.title}</h2>
        <p className='font-bold mt-1 mb-3 flex-grow'>Price : ${data.price}</p>
        <button className='btn btn-outline hover:border-black border-purple-600 border-2 text-purple-600 font-bold w-fit'><Link to={`/productDetails/${data.id}`}>View Details</Link></button>
    </div>
  )
}

export default ProductCard