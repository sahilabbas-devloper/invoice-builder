import React, { useState } from 'react'
import { useContext } from 'react'
import { billContext } from '../Context/invoice.js'
import { Link } from 'react-router-dom'

function Purchase() {


  const {  setbilldata,setitems } = useContext(billContext)

  const [num, setnum] = useState(0)

  const number = () => {
    setnum(prev => prev + 1)
  }

  const handleclick = () => {
    number();
    additem();
  }


  const [invoice, setinvoie] = useState('')

  const [itemname, setitemname] = useState('')
  const [price, setprice] = useState('')
  const [Qty, setQty] = useState('')

  const [yourname, setyourname] = useState('')
  const [addrss, setaddress] = useState('')
  const [date, setdate] = useState('')

  const [clintname, setclintname] = useState('')
  const [clintaddrss, setclintaddress] = useState('')
  const [clintgstno, setclintgstno] = useState('')
 



 
   const invoicenum =  Math.floor(10000 + Math.random() * 90000); 


  const addbilldata = () => {
    setbilldata({yourname, addrss, date, clintname, clintaddrss, clintgstno,invoicenum ,invoice})
  }


  const additem = () => {
   
  const item = {
    name: itemname,
    price: price,
    Qty: Qty
  };

  setitems(prev => [...prev, item]);
  setitemname('');
  setprice('');
  setQty('');
};



  return (
    <div>
      <div className='w-full h-14 p-4 flex  bg-white '>

      </div>
      <section className='w-full min-h-screen bg-lime-50 max-w-full h-full flex flex-col  items-center'>
        <div className='flex flex-col w-full '>

          <div className='w-full h-auto p-4 flex md:gap-30 gap-10 flex-col md:flex-row bg-white '>
            <select name="" id="" className='text-xl h-auto outline-none max-w-md font-bold'
            onChange={(e) => setinvoie(e.target.value)}
            >
            <option value="">Select invoice type</option>
              <option value="Purchase">Purchase Invoice</option>
              <option  value="Sales">Sales Invoice</option>
            </select>
    
            <div className='flex md:gap-100 gap-10  w-full flex-col md:flex-row'>
              <div className='flex flex-col w-full  md:w-full md:text-[12px] pb-2 max-w-45 gap-2 h-35'>
                <h1 className='text-lg font-bold'>Your</h1>
                <input type="name"
                  className='outline-none p-1 max-w-sm border border-black-1 rounded-sm'
                  placeholder='shope name'
                  required
                  onChange={(e) => setyourname(e.target.value)}
                />
                <input type="address"
                  className='outline-none p-1 max-w-sm border border-black-1 rounded-sm'
                  placeholder='address'
                   required
                  onChange={(e) => setaddress(e.target.value)}
                />
                <input type="date"
                  className='outline-none p-1 max-w-sm border border-black-1 rounded-sm'
                  placeholder='date'
                   required
                  onChange={(e) => setdate(e.target.value)}
                />
              </div>


              <div className='flex flex-col text-[12px] pb-2 max-w-45 gap-2 h-35'>
                <h1 className='text-lg font-bold'>From</h1>
                <input type="name"
                  className='outline-none p-1 max-w-sm border border-black-1 rounded-sm'
                  placeholder='name'
                   required
                  onChange={(e) => setclintname(e.target.value)}
                />
                <input type="address"
                  className='outline-none p-1 max-w-sm border border-black-1 rounded-sm'
                  placeholder='address'
                   required
                  onChange={(e) => setclintaddress(e.target.value)}
                />
                <input type="text"
                  className='outline-none p-1 max-w-sm border border-black-1 rounded-sm'
                  placeholder='GST NO'
                   required
                  onChange={(e) => setclintgstno(e.target.value)}
                />

              </div>
            </div>
          </div>


          <div className='flex p-8 md:gap-20 gap-5 items-center  flex-col md:flex-row'>
            <div className='flex flex-col  gap-1 md:ml-2'>
              <label htmlFor="" className='text-xl font-bold'>Item name</label>
              <input type="text"
                placeholder='Item name'
                value={itemname}
                 required
                className='outline-none bg-white p-2'
                onChange={(e) => setitemname(e.target.value)}
              />
            </div>

            <div className='flex flex-col  gap-1'>
              <label htmlFor="" className='text-xl font-bold'>Item price</label>
              <input type="text"
                placeholder='price'
                value={price}
                 required
                className='outline-none bg-white p-2'
                onChange={(e) => setprice(e.target.value)}
              />
            </div>

            <div className='flex flex-col  gap-1'>
              <label htmlFor="" className='text-xl font-bold'>Item Qty</label>
              <input type="text"
                placeholder='Qty'
                  value={Qty}
                   required
                className='outline-none bg-white p-2'
                onChange={(e) => setQty(e.target.value)}
              />
            </div>


            <button
              onClick={handleclick}
              className='bg-green-600 flex items-center justify-center text-sm font-semibold shadow-lg border-none rounded-md text-white w-25 h-9 mt-6'>ADD ITEMS</button>

            <h1 className='text-xl font-semibold'> item ADD {num}</h1>
          </div>
          <div className='w-full flex items-center justify-center mb-4'>
            <Link to={"/invoice"}
              onClick={addbilldata}
              className='bg-green-600 flex items-center justify-center text-sm font-semibold shadow-lg border-none rounded-md text-white w-25 h-9 mt-6'
            >build invoice</Link>
          </div>



        </div>
      </section>


    </div>
  )
}

export default Purchase