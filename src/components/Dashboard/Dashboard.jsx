
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './dashBoard.css'
const Dashboard = () => {
    return (
        <div>
            <div className="min-h-60 w-full bg-purple-600 p-8 text-white text-center flex flex-col gap-4">
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque amet vel beatae, vitae sed natus illo tenetur adipisci quibusdam!</p>

                <div className="flex gap-5 justify-center" id='dashBoard'>
                    <NavLink to={'/dashboard/cart'}>Cart</NavLink>

                    <NavLink to={'/dashboard/wishlist'}>Wishlist</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard