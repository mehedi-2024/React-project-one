import React, { useContext } from 'react'
import { Data, WishlistContext } from '../../App'

const WishlistItem = ({ id }) => {
    const data = useContext(Data)
    const wishlistItems = useContext(WishlistContext)
    const index = id - 1

    function remove() {
        const x = wishlistItems[0].filter(item => item !== id)
        wishlistItems[1]([...x])
       
    }
    return (
        <div className='p-5 rounded-xl border border-[#0000004a] shadow flex gap-4'>
            <img src={data[index].image} alt="" className='w-48 rounded-xl' />
            <div className='flex flex-col gap-2 justify-center'>
                <h2 className="text-2xl font-bold">{data[index].title}</h2>
                <p className="opacity-70">{data[index].description}</p>
                <p className='font-bold'>Price : ${data[index].price}</p>
                <button onClick={remove} className='px-4 py-2 w-fit bg-red-500 text-white text-sm font-bold rounded-xl cursor-pointer hover:bg-red-400'>Remove</button>
            </div>
        </div>
    )
}

export default WishlistItem