import React, { useEffect, useState } from 'react'
import navlogo from '../assets/Navlogo.jpg'
import locationlogo from '../assets/locationlogo.jpg'
import profilelogo from '../assets/profilelogo.jpg'
import packagelogo from '../assets/packagelogo.jpg'
import productlogo from '../assets/productlogo.jpg'
import { Link, Outlet } from 'react-router-dom'
import Cart from '../pages/Cart'
import SignCart from '../pages/SignCart'
import axios from 'axios'

const Navbar = () => {
    const [show, setShow] = useState (false)
    const [ showing, setShowing ] = useState(false)

    const fetcher = async ()=>{
      try {
        const data = await axios('http://localhost:5757/api/user/getUserName',{
          method: "GET",
          headers: {
            "content-type": "application/json"
          }
        })
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } 

    useEffect(()=>{
      fetcher()
    })
  return (
    <main className='container position-relative'>
    <nav className='d-flex justify-content-between align-items-center gap-3'>
 <section className='d-flex justify-content-between align-items-center gap-3 my-3'>

           <div>
            <Link to='/'>
                <img src={navlogo} alt="" />
            </Link>
           </div>

           <div>
            <img src={locationlogo} alt="" className='d-none d-lg-block'/>
           </div>
           <h5 className='d-none d-lg-block text-danger'>Lagos, Nigeria</h5>
 </section>

 <section className='d-flex justify-content-between align-items-center gap-3'>

   
     <img src={productlogo} alt="" className='img-fluid'/>
    


      <h5 className='d-none d-lg-block mt-2 text-danger'>All products</h5>
      <div className='d-flex gap-2' role='button'
      onClick={()=>(!showing ? setShowing(true) : setShowing(false))}>
      <img src={profilelogo} alt="" />
      <h5 className='d-none d-lg-block mt-2'>Hi, Guest</h5>
      </div>

      <div>
        <div onClick={()=>(!show ? setShow(true) :setShow(false))}>
            <img src={packagelogo}alt="" role='button' />
        </div>
      </div>
 </section>
    </nav>
    <div></div>
    <div className='position-absolute end-0'>{show && <Cart/>}</div>
    <div className='position-absolute end-0'>{showing && <SignCart/>}</div>
    <Outlet/>
</main>
  )
}

export default Navbar