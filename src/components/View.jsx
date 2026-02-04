import { useState } from 'react'
import axios from "axios"
import html2pdf from "html2pdf.js"
const BASE_URL= import.meta.env.VITE_API_URL;

function View() {


  const [data, setdata] = useState('')

  const [res, setres] = useState()
    const [Loading, setLoading] = useState(false)


  const pdfdomload = () => {
    const ele = document.getElementById("yourinvoice")
    const option = {
      fileame: "invoice-PDF",
      img: {
        type: "jpeg", quality: 0.98
      },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", formet: "a4", orientation: "portrait" },
    }
    html2pdf().set(option).from(ele).
      save()

  }

  const getdata = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
       const result = await axios.get(`${BASE_URL}/api/invoice/Recive`, {params:{data}})
    const massage = result.data
    console.log(massage)
    if (massage == 'invoice is not found.') {
      alert(result.data)
       setdata('')
    } else {
      setres(result.data)
      alert("sucessfully..")
       setdata('')
    }
    } catch (error) {
      console.log("somthing wrong..",error)
    } finally {
      setLoading(false)
    }
   

  }






  return (
    <div>
      <div className='w-full h-14 p-4 flex  bg-white '>

      </div>
      <section className='w-full min-h-screen  max-w-full h-full flex flex-col  items-center'>
        <div className='w-full  p-12 flex flex-col mt-10 overflow-x-auto pr-12 justify-center items-center gap-2 '>
          <h1 className='text-2xl font-bold '>View your <span className='text-5xl ml-1 text-green-600'>invoice</span> </h1>
          <p className='text-[13px]'>find your invoice with the help of invoice number.</p>
          <div className='flex gap-4 items-center'>
            <input type="text"
              className='outline-none shadow-xl rounded-md max-w-full h-auto p-3 mt-3 bg-blue-50'
              placeholder='Enter invioce number'
              value={data}
              onChange={(e) => setdata(e.target.value)}
            />
            <button
              onClick={getdata}
              disabled={Loading}
              className='bg-green-700 w-20 hover:bg-green-600 shadow-xl h-11 mt-2 rounded-md flex items-center  justify-center text-white font-semibold text-sm'>
              {Loading && (
                    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>

                      <div className='w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin'></div>

                    </div>

                  )}
              Find</button>
          </div>

        </div>


        <div id='yourinvoice' style={{ width: "794px", Height: "1123px", overflow: "hidden", margin: "auto", padding: "30px", fontFamily: "Arial", boxSizing: "border-box" }} className='w-198 text[10px]  bg-white h-280 p-4 shadow-lg flex flex-col md:text-md mt-3'>


          <div className='w-full h-auto flex flex-col items-center justify-center mb-6'>
            <h1 className='text-2xl font-bold'>INVOICE</h1>
            <h1 className='text-[14px] font-semibold'> NO. {res?.invoicenumber}</h1>
          </div>

          <div className='flex items-center gap-110 max-w-full mb-15 '>
            <div className='text-sm w-full '>
              <img className='max-w-30  mix-blend-darken h-auto' src="/logo.png" alt="logo" />
            </div>
            <div className='text-[12px] w-full'>
              <h1 className='text-2xl font-bold'>{res?.invoice}</h1>
              <h1 className='text-[18px] font-semibold'>{res?.invoicetype}</h1>
              <p>invoice for bussinesss</p>
            </div>
          </div>


          <div className='flex items-center gap-105 w-full mb-10 p-4'>
            <div className='text-[13px] w-full '>
              <h1 className='text-xl font-bold'>From :</h1>
              <h1 className='text-lg font-semibold'>{res?.sellername}</h1>
              <p>{res?.selleraddress}</p>
              <p>{res?.date}</p>
            </div>
            <div className='text-[13px] w-full'>
              <h1 className='text-xl font-bold'>TO :</h1>
              <h1 className='text-lg font-semibold'>{res?.buyername}</h1>
              <p>{res?.buyeraddress}</p>
              <p>{res?.buyergstno}</p>
            </div>
          </div>




          <div className='w-full h-auto'>

            <div className='flex items-center font-semibold border-b p-2'>
              <h1 className='mr-85'>Items</h1>
              <h1 className='mr-20'>Price</h1>
              <h1 className='mr-20 '>Quantity</h1>
              <h1 className=''>Amount</h1>
            </div>
            {res?.items.map((item, i) => (
              <div key={i}
                className='flex items-center font-medium border-b p-2 '
              >
                <div className='flex items-center  w-50 mr-48 '>
                  <h1 className='text-md font-semibold'>{item.itemname}</h1>
                </div>

                <div className='flex items-center justify-center w-30  '>
                  <h1 className='text-md font-semibold '>₹{item.itemprice}</h1>
                </div>

                <div className='flex items-center justify-center w-25 ml-10 '>
                  <h1 className='text-md font-semibold'>{item.itemqty}</h1>
                </div>

                <div className='flex items-center justify-center w-30 ml-10 '>
                  <h1 className='text-md font-semibold' >₹{Number(item.itemqty) * Number(item.itemprice)}</h1>
                </div>

              </div>
            ))}

            <div className='flex items-end flex-col gap-4 font-medium pr-7 border-b    p-3 mb-2'>
              <div className='flex gap-4'>
                <div>
                  <h1>subtotal</h1>
                </div>

                <div className='w-30 flex justify-end '>
                  ₹{res?.subtotal}
                </div>

              </div>

              <div className='flex gap-4'>
                <div>
                  <h1>GST(18%)</h1>
                </div>

                <div className='w-30 flex justify-end '>
                  ₹{res?.gst}
                </div>
              </div>


              <div className='flex gap-25'>
                <div>
                  <h1>discount%</h1>
                </div>
                <div className='w- flex justify-end '>

                  <div className='w-5  flex justify-center text-[15px] '>
                    ₹{res?.discount}
                  </div>

                </div>
              </div>

              <div className='flex gap-4 mb-20'>
                <div>
                  <h1 className='font-bold text-lg'>total</h1>
                </div>
                <div className='w-30 flex justify-end '>
                  ₹{res?.total}
                </div>
              </div>



            </div>

            <div className='flex items-center flex-col gap-2 text-sm pr-5 p-3 mb-2'>
              <p>Plese pay the invoice before the date.let us know if you have any Question.</p>
              <p>closer to comany sucessfull invoice.</p>
            </div>

          </div>






        </div>
        <button
          onClick={pdfdomload}
          className='bg-green-700 w-30 hover:bg-green-600 shadow-xl h-11 mt-10 mb-10 rounded-md flex items-center  justify-center text-white font-semibold text-sm'>Domload</button>

      </section>


    </div>
  )
}

export default View