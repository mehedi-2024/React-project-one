
import React, { createContext } from 'react'
import { createCookie, Outlet, useLoaderData } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import './App.css'
import Footer from './components/Footer/Footer'

export const Data = createContext([])

const App = () => {

  const data = useLoaderData()

  return (
    <div>
      <Data.Provider value={data} >
        <Nav />
        <Outlet />
        <Footer />
      </Data.Provider>
    </div>
  )
}

export default App