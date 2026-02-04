
import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {

  const [open, setopen] = useState(false)
  
  const toggle = () => {
    if (open == false) {
      setopen(true)
    } else {
      setopen(false)
    }
  }
  return (
    <div>
      <section className='w-full h-14 p-4 flex gap-60 md:gap-150  bg-white shadow-lg fixed items-center'>
        <div>
          <div className='flex items-center'>
            <img className='md:w-full md:max-w-10 w-full max-w-6   h-auto object-cover md:ml-5  mix-blend-darken' src="https://cdn-icons-png.flaticon.com/512/6953/6953015.png" alt="" />
            <h1 className=' text-md md:text-xl font-semibold'>InvoiceGen</h1>
          </div>
        </div>


        <button className='text-2xl font-bold md:hidden block'
          onClick={toggle}
        >&#9776;</button>
        <nav className='md:text-md gap-3 hidden md:block text-md font-semibold text-gray-700   md:gap-15 '>
          <Link to="/Home" className=' hover:text-green-600 mr-10'>Home</Link>
          <Link to="/Purchase" className=' hover:text-green-600 mr-10'>Purchase</Link>
          <Link to="/View" className=' hover:text-green-600 mr-10'>View</Link>
          <Link to="/Invoice" className=' hover:text-green-600'>Invoice</Link>
        </nav>


        <div className='w-30 h-auto fixed mt-56 shadow-lg bg-white ml-67.5'>
          <nav className={`md:text-md gap-3 md:hidden ${open ? "block" : "hidden"} flex p-4 flex-col text-md font-bold text-gray-700   md:gap-15 `} >
            <Link to="/Home" className=' hover:text-green-600 border-b '>Home</Link>
            <Link to="/Purchase" className=' hover:text-green-600 border-b '>Purchase</Link>
            <Link to="/View" className=' hover:text-green-600 border-b '>View</Link>
            <Link to="/Invoice" className=' hover:text-green-600 border-b '>Invoice</Link>
          </nav>
        </div>




      </section>

    </div>
  )
}

export default Header