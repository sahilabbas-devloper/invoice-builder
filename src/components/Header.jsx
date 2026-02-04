import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <section className='w-full h-14 p-4 flex gap-10 md:gap-150  bg-white shadow-lg fixed items-center'>
        <div>
          <div className='flex items-center'>
            <img className='md:w-full md:max-w-10 w-full max-w-6   h-auto object-cover md:ml-5  mix-blend-darken' src="https://cdn-icons-png.flaticon.com/512/6953/6953015.png" alt="" />
            <h1 className=' text-md md:text-xl font-semibold'>InvoiceGen</h1>
          </div>
        </div>



       


        <nav className='md:text-md gap-3  text-md font-semibold text-gray-700 md:flex  md:gap-15 '>
          <Link to="/Home" className=' hover:text-green-600 mr-2'>Home</Link>
          <Link to="/Purchase" className=' hover:text-green-600 mr-2'>Purchase</Link>
          <Link to="/View" className=' hover:text-green-600 mr-2'>View</Link>
          <Link to="/Invoice" className=' hover:text-green-600'>Invoice</Link>
        </nav>





      </section>
    </div>
  )
}

export default Header