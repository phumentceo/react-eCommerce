import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Navbar  from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Detail from "./pages/Detail/Detail"

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
              </Routes>
          </BrowserRouter>
      </div>
      <Footer/>
    </div>
   
  )
}

export default App
