import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from "./layout/nav/Product"



function App() {


  return (
    <>
     <Routes>
      <Route path='pruduct-info/:id' element={<Product /> }/>
      <Route path="" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
