import React from 'react'
import { Link } from 'react-router'

function Navbar( {count}) {
  return (
  <>
    <div className='fixed z-[50] w-full px-4 py-4  md:px-6 bg-blue-400 flex justify-between '>
    <div className='text-2xl bold '>Shopping 🛒 </div>
    <div>
      <div className='flex relative z-[20]'>
    <div className='text-2xl md:text-3xl md:mr-6 bold hover:text-red-600'><Link to="/cart">Cart </Link></div>
   
    <div className='bg-green-500 px-2 text-white py-0 rounded-full absolute md:-bottom-3 -bottom-4 md:right-1 -right-2 '>{count}</div>
    
    </div>
    </div>
      </div>
    </>
  )   
}

export default Navbar