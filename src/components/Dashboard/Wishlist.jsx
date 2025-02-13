
import React, { useContext } from 'react'
import { WishlistContext } from '../../App'
import WishlistItem from './WishlistItem'

const Wishlist = () => {
  const wishlistItems = useContext(WishlistContext)
  return (
    <div className='mt-10'>
      <h2 className="text-3xl font-bold">Wishlist :</h2>
      <div className="mt-8 flex flex-col gap-6">

        {
          wishlistItems[0].length ?  wishlistItems[0].map(item => <WishlistItem id={item}></WishlistItem>) : <h1 className="text-4xl font-bold text-purple-600 text-center mt-8">No data to show statistics</h1>
        }
      </div>
    </div>
  )
}

export default Wishlist