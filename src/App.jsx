import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Review from './pages/Review'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Addrecipient from './pages/Addrecipient.jsx'
import Addaddress from './pages/Addaddress.jsx'
import  { Toaster } from 'react-hot-toast';
import Changepassword from './pages/Changepassword.jsx'
import Footer from './layout/Footer.jsx'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<><Navbar/><Footer/></>}>

      
        <Route path='/' element={<Home/>}/>
        
        <Route path='/review' element={<Review/>}/>
        <Route path='/addrecipient' element={<Addrecipient/>}/>
        <Route path='/addaddress' element={<Addaddress/>}/>
      </Route>
    
      <Route path='/login' element={<Login/>}/>
      <Route path='/changePassword' element={<Changepassword/>}/>

      <Route path='/signup' element={<Signup/>}/>
    </Routes>

    </BrowserRouter>
    <Toaster />
    </>
  )
}

export default App