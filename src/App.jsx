import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Navbar  from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Detail from "./pages/Detail/Detail"
import Login  from "./pages/Login/Login"
import Register  from "./pages/Register/Register"
import Payment from "./pages/Payment/Payment"
import Shop  from "./pages/Shop/Shop"
function App() {
  return (
    <div>
      <Navbar/>
      <div className=" lg:w-[90%] md:w-[80%] w-full mt-[50px] mx-auto">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/detail" element={<Detail/>}/>
                  <Route path="*"  element={<NotFound/>}  />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/payment" element={<Payment/>}/>
                  <Route path="/shop" element={<Shop/>}/>
              </Routes>
          </BrowserRouter>
      </div>
      <Footer/>
    </div>
   
  )
}

export default App
