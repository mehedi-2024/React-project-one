import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import './nav.css'
import { CartContext, WishlistContext } from '../../App';

const Nav = () => {
    const location = useLocation()
    const cartItems = useContext(CartContext)
    const wishlist = useContext(WishlistContext)
    const pathName = location.pathname
    return (
        <div className={pathName === '/' ? 'bg-purple-600 text-white rounded-t-xl' : 'bg-white text-black'}>
            <div className="navbar px-8">
                <div className="navbar-start">
                    <a className="text-xl">daisyUI</a>
                </div>
                <div className="navbar-center flex">
                    <ul id='nav' className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/q'}>Statistics</NavLink></li>
                        <li><NavLink to={'/dashboard/cart'}>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-8">
                    <div>
                        <Link to={''} className='relative'>
                            <FaShoppingCart size={20} ></FaShoppingCart>
                            <p className="absolute -top-4 -right-1">{cartItems[0].length}</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={''} className='relative'>
                            <FaHeart size={20} ></FaHeart>
                            <p className="absolute -top-4 -right-1">{wishlist[0].length}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Nav