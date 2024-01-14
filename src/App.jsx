import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
// import Review from './pages/Review'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Addrecipient from './pages/Addrecipient.jsx'
import Addaddress from './pages/Addaddress.jsx'
import  { Toaster } from 'react-hot-toast';
// import Changepassword from './pages/ResetPassword.jsx'
import Footer from './layout/Footer.jsx'
import Forgotpassword from './pages/Forgotpassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import Order from './pages/Order.jsx'
import CheckOut from './pages/CheckOut.jsx'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<><Navbar/><Footer/></>}>

      
        <Route path='/' element={<Home/>}/>
        
        <Route path='/CheckOut' element={<CheckOut/>}/>
        <Route path='/addrecipient' element={<Addrecipient/>}/>
        <Route path='/Order' element={<Order/>}/>

      </Route>
    
      <Route path='/login' element={<Login/>}/>
      <Route path='/password/:resetToken' element={<ResetPassword/>}/>
      <Route path='/forgotpassword' element={<Forgotpassword/>}/>

      <Route path='/signup' element={<Signup/>}/>
    </Routes>

    </BrowserRouter>
    <Toaster />
    </>
  )
}

export default App