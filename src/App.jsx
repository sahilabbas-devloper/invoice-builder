
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import View from './components/View';
import Invoice from './components/Invoice';
import Purchase from './components/Purchase';
import Header from './components/Header';


function App() {


  return (
    <div>
   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Purchase' element={<Purchase />} />
          <Route path='/View' element={<View />} />
          <Route path='/Invoice' element={<Invoice />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
 