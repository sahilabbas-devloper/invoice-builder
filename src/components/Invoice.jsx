
import { useContext, useState } from 'react'
import { billContext } from '../Context/invoice'
import axios from "axios"
import html2pdf from "html2pdf.js"
const BASE_URL= import.meta.env.VITE_API_URL;

function Invoice() {

  const { billdata, items } = useContext(billContext)
  const [disamt, setdisamt] = useState(0)

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.Qty
  }, 0)

  const gstamount = subtotal * 18 / 100
  const totalamt = subtotal + gstamount
  const discount = Math.floor(totalamt * disamt / 100)
  const totalamount = Math.floor(totalamt - discount)


  const pdfdomload = () => {
    const ele = document.getElementById("invoice")
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

  const senddata = async () => {

    try {
      const res = await axios.post(`${BASE_URL}/api/invoice/Send`,

        {
          billdata,
          items,
          subtotal,
          gstamount,
          discount,
          totalamount,
        }
      )
      alert(res.data)
    } catch (error) {
      console.log("axios error", error)
    }

  }

  const handle = () => {
    senddata();
    pdfdomload();
  }


  return (
    <div>
      <div className='w-full h-14 p-4 flex  bg-white '>

      </div>
      <section className='w-full min-h-screen  max-w-full h-full flex flex-col  items-center'>
        <div className='w-full  p-12 flex flex-col mt-10 overflow-x-auto pr-12 justify-center items-center gap-15 '>

          <div id='invoice' style={{ width: "794px", Height: "1123px", overflow: "hidden", margin: "auto", padding: "30px", fontFamily: "Arial", boxSizing: "border-box" }} className='w-198 text[10px]  bg-white h-280 p-4 shadow-lg flex flex-col md:text-md mt-3'>


            <div className='w-full h-auto flex flex-col items-center justify-center mb-6'>
              <h1 className='text-2xl font-bold'>INVOICE</h1>
              <h1 className='text-[14px] font-semibold'> NO. {billdata.invoicenum}</h1>
            </div>

            <div className='flex items-center gap-110 max-w-full mb-15 '>
              <div className='text-sm w-full '>
                <img className='max-w-30  mix-blend-darken h-auto' src="/logo.png" alt="logo" />
              </div>
              <div className='text-[12px] w-full'>
                <h1 className='text-2xl font-bold'>{billdata.invoice}</h1>
                <h1 className='text-[18px] font-semibold'>{billdata.yourname}</h1>
                <p>invoice for bussinesss</p>
              </div>
            </div>


            <div className='flex items-center gap-105 w-full mb-10 p-4'>
              <div className='text-[13px] w-full '>
                <h1 className='text-xl font-bold'>From :</h1>
                <h1 className='text-lg font-semibold'>{billdata.yourname}</h1>
                <p>{billdata.addrss}</p>
                <p>{billdata.date}</p>
              </div>
              <div className='text-[13px] w-full'>
                <h1 className='text-xl font-bold'>TO :</h1>
                <h1 className='text-lg font-semibold'>{billdata.clintname}</h1>
                <p>{billdata.clintaddrss}</p>
                <p>{billdata.clintgstno}</p>
              </div>
            </div>




            <div className='w-full h-auto'>

              <div className='flex items-center font-semibold border-b p-2'>
                <h1 className='mr-85'>Items</h1>
                <h1 className='mr-20'>Price</h1>
                <h1 className='mr-20 '>Quantity</h1>
                <h1 className=''>Amount</h1>
              </div>
              {items?.map((item, i) => (
                <div key={i}
                  className='flex items-center font-medium border-b p-3 '
                >
                  <div className='flex items-center  w-50 mr-48 '>
                    <h1 className='text-md font-semibold'>{item.name}</h1>
                  </div>

                  <div className='flex items-center justify-center w-30  '>
                    <h1 className='text-md font-semibold '>₹{item.price}</h1>
                  </div>

                  <div className='flex items-center justify-center w-25 ml-10 '>
                    <h1 className='text-md font-semibold'>{item.Qty}</h1>
                  </div>

                  <div className='flex items-center justify-center w-30 ml-10 '>
                    <h1 className='text-md font-semibold' >₹{Number(item.Qty) * Number(item.price)}</h1>
                  </div>

                </div>
              ))}

              <div className='flex items-end flex-col gap-4 font-medium pr-7 border-b    p-3 mb-2'>
                <div className='flex gap-4'>
                  <div>
                    <h1>subtotal</h1>
                  </div>

                  <div className='w-30 flex justify-end '>
                    ₹{subtotal}
                  </div>

                </div>

                <div className='flex gap-4'>
                  <div>
                    <h1>GST(18%)</h1>
                  </div>

                  <div className='w-30 flex justify-end '>
                    ₹{gstamount}
                  </div>
                </div>


                <div className='flex gap-25'>
                  <div>
                    <h1>discount%</h1>
                  </div>
                  <div className='w- flex justify-end '>
                    <input type="text"
                      value={disamt}
                      className='w-5 outline-none text-[15px]  '
                      onChange={(e) => setdisamt(e.target.value)}
                    />
                    <label htmlFor="">%</label>
                  </div>
                </div>

                <div className='flex gap-4 mb-20'>
                  <div>
                    <h1 className='font-bold text-lg'>total</h1>
                  </div>
                  <div className='w-30 flex justify-end '>
                    ₹{totalamount}
                  </div>
                </div>



              </div>

              <div className='flex items-center flex-col gap-2 text-sm pr-5 p-3 mb-2'>
                <p>Plese pay the invoice before the date.let us know if you have any Question.</p>
                <p>closer to comany sucessfull invoice.</p>
              </div>

            </div>






          </div>


        </div>
        <button
          className='bg-green-700 flex items-center justify-center text-white h-10 font-semibold shadow-lg hover:bg-green-600 w-35 mt-5 mb-10 rounded-sm'
          onClick={handle}
        >DomloadPDF</button>
      </section>



    </div>
  )
}

export default Invoice