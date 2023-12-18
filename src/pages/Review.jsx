import React from 'react'
// import delete from '../assets/delete.jpg'
import '../style/review.css'
import { Link } from 'react-router-dom'

const Review = () => {
  return (
    <>
    <main className='container'>
       <div className='d-lg-flex gap-3 align-items-center justify-content-around my-5'>
       <div className='border border-1 border-black rounded p-3 div1 shadow-lg'>
            <h3>Review and place order</h3>
            <p>Review / Add address and fulfill payment to complete your purchase</p>
            <hr />
            <h4>Recipient Information</h4>
            <Link to='/addrecipient'><button className='add'>Add Recipient</button></Link>
            <hr />
            <h4>Delivery Address</h4>
           <Link to='/addaddress'> <button className='add'>Add Delivery Address</button></Link>
            <hr />
            <button className="btn bg-success text-white w-100">Place Your Order</button>
        </div>
        <div className='border border-1 border-black rounded p-3 div2 shadow-lg'>
            <h5>Your Order From</h5>
            <hr />
            <div className='d-flex justify-content-between'>
                <div>
                    <h4>Double Crunchy Chicken Burger</h4>
                    <p className='addfon'>
                      <button className='btn' >-</button>
                      
                      <button className='btn' >+</button>
                      </p>
                </div>
                {/* <img src={delete} alt="" /> */}
                <p>N12000.0</p>
            </div>
            <hr />
            <div className='d-flex justify-content-between align-items-center'> <p>Items Total: </p>
            <p>N12000.0</p> </div>

            <div className='d-flex justify-content-between'> <p>Discount</p>
            <p>0</p> </div>

            <div className='d-flex justify-content-between'> <p>Delivery Charge</p>
            <p>N0.0</p> </div>
            <hr />
            <div className='d-flex justify-content-between'> <p>Total</p>
            <p>N12000</p> </div>
        </div>
       </div>
    </main>
    </>
  )
}

export default Review