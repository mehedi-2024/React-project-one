
import React, { createContext, useState } from 'react'
import { createCookie, Outlet, useLoaderData } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import './App.css'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Data = createContext([])
export const CartContext = createContext([])
export const WishlistContext = createContext([])
export const TotalMoney = createContext(0)

const App = () => {

  const data = useLoaderData()
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const [totalMoney, setTotalMoney] = useState(0)
  console.log(cartItems)
  return (
    <div>
      <Data.Provider value={data}>
        <CartContext.Provider value={[cartItems, setCartItems]}>
          <WishlistContext.Provider value={[wishlistItems, setWishlistItems]}>
            <TotalMoney.Provider value={[totalMoney, setTotalMoney]}>
              <Nav />
              <Outlet />
              <Footer />
              <ToastContainer />
            </TotalMoney.Provider>
          </WishlistContext.Provider>
        </CartContext.Provider>
      </Data.Provider>
    </div>
  )
}

export default App