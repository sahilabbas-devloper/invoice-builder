import { useState } from "react";
import { billContext } from "../Context/invoice.js"


const BillProvider = ({ children }) => {

  const [items ,setitems] = useState([
   
  ])

  const [billdata, setbilldata] = useState({
    yourname:"",
    addrss:"",
    date:"",
    clintname:"",
    clintaddrss:"",
    clintgstno:"",
  })

  return (
    <billContext.Provider value={{ billdata, setbilldata,items,setitems }}>
      {children}
    </billContext.Provider>
  );
}

export default BillProvider;