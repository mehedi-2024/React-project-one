
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../App'
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const ProductDetails = () => {
  const data = useContext(Data)
  const id = useParams()
  const currentData = data[id.id - 1]
  const [favorite, setFavorite] = useState(<MdOutlineFavoriteBorder size={25}/>)
  const [isFavorite, setIsFavorite] = useState(false)
  function addToFavorite(params) {
    if (isFavorite) {
      setFavorite(<MdOutlineFavoriteBorder size={25}/>)
      setIsFavorite(false)
    } 
    else {
      setFavorite(<MdOutlineFavorite size={25} />)
      setIsFavorite(true)
    }
  }
  return (
    <div className='h-80 w-full bg-purple-600 p-8 relative mb-[350px] rounded-b-xl'>
      <h1 className='text-3xl font-bold text-white text-center'>Product Details</h1>
      <p className="text-center text-white w-[650px] mt-4 mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in vitae ipsa dignissimos ipsam a doloribus aliquam. Tempore dicta nobis recusandae </p>

      <div className="w-[800px] bg-white p-5 rounded-2xl absolute -bottom-[250px] left-[50%] -translate-x-[50%] flex gap-6 shadow-lg">
        <img src={currentData.image} className='w-80 rounded-xl' alt="" />

        <div className='text-black grid gap-3'>
          <h2 className="text-3xl font-bold">{currentData.title}</h2>
          <h5 className="font-bold text-xl">Price : ${currentData.price}</h5>
          <p className="px-3 w-fit text-sm font-bold text-green-500 bg-green-100 border border-green-500 rounded-xl">In Stoke</p>
          <p className="opacity-70">{currentData.description}</p>
          <h3 className="text-lg font-bold -mb-2">Specification:</h3>
          <ul className='list-decimal list-inside'>
            {
              currentData.Specification.map(x => <li className='opacity-70'>{x}</li>)
            }
          </ul>
          {/* rating-box  */}
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold flex items-center gap-1">Rating : </h3>
            {/* rating  */}
            <div className="rating rating-md gap-1">
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <button className='flex items-center gap-2 text-sm font-bold text-white px-4 py-2 rounded-3xl bg-purple-500 border-2 border-purple-500 hover:bg-white hover:text-purple-500'>Add to Cart <IoCartOutline size={20} /></button>

            <button onClick={addToFavorite} className="btn btn-circle">
              {favorite}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails