
import React, { useContext, useState } from 'react'
import './menu.css'
import { Data } from '../../../App'

const ProductMenu = ({ show }) => {

  const data = useContext(Data)
  let shoingData = [...data]

  function whichGadgetShow(item) {
    if (item === 'All Product') {

    }
    else if (item === 'Phones') {
      const x = data.filter(data => data.category === 'Mobile')
      shoingData = [...x]
      show[2]('hidden')
    }
    else if (item === 'Laptop') {
      const x = data.filter(data => data.category === 'Laptop')
      shoingData = [...x]
      show[2]('hidden')
    }
    else {
      const x = data.filter(data => data.category === 'Accessories')
      shoingData = [...x]
      show[2]('hidden')
    }

    show[1](shoingData)
  }

  const [activeItem, setActiveItem] = useState('All Product')
  const items = ['All Product', 'Phones', 'Laptop', 'Accessories']
  return (
    <div className='px-5 py-4 sticky top-4 font-bold shadow-md rounded-2xl w-60 bg-white grid gap-4'>
      {
        items.map(item => <a className='px-4 py-3 cursor-pointer rounded-xl bg-gray-200' id={activeItem === item ? 'active' : ''} onClick={() => {
          setActiveItem(item)
          whichGadgetShow(item)
        }}>{item}</a>)
      }
    </div>
  )
}

export default ProductMenu