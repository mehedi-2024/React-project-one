
import { useContext, useEffect, useState } from "react";
import { PiSortAscendingBold } from "react-icons/pi";
import { CartContext, Data, TotalMoney } from "../../App";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useContext(CartContext)
    console.log(cartItems[0])
    const totalMoney = useContext(TotalMoney)

    return (
        <div className='mt-10'>
            <div className='flex justify-between'>
                <h2 className="text-3xl font-bold">Cart</h2>
                <div className='flex gap-3'>
                    <h2 className="text-2xl font-bold">Total cost : ${totalMoney[0]}</h2>
                    <button className='font-bold px-4 py-1 rounded-3xl bg-pink-100 border-2 text-sm border-purple-600 flex gap-2 items-center'>Sort by Price<PiSortAscendingBold size={20} /></button>
                    <button className='font-bold px-4 py-1 rounded-3xl bg-purple-600 text-white text-sm border-2 border-purple-600 '>Purchase </button>
                </div>
            </div>

            <div className="mt-8 flex flex-col gap-6">
                {
                    cartItems[0].map(id =>  <CartItem id={id} /> )
                }
            </div>
        </div>
    )
}

export default Cart