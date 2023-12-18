import React from 'react'

const AddAddress = () => {
  return (
    <div className='container'>

<div className='mt-5 row justify-content-center justify-content-lg-between gap-1 gap-lg-0'>
          <div className='bgc col-lg-6 col-11 px-2 rounded shadow-sm pt-5 pb-3'>
          <h1 className='fs-1 text-center mb-4 '>Add Address</h1>
            <form >
                <label htmlFor="" className='my-2 w-100'>City</label>
                <input type="text" className='w-100 rounded p-3 '/>
                <label htmlFor="" className='my-2 w-100'>House Number</label>
                <input type="text" className='w-100 rounded p-3 '/>
                <div>
                <label htmlFor="" className='my-2 w-100'>Street</label>
                <input type="text" className='w-100 rounded p-3 '/>
               
                </div>
                <button className="btn btn-danger text-white w-100 mt-5 p-3">Use this address</button>
            </form>
          
           </div>
        
           <div className='bgc col-lg-6 col-11 rounded '>
          
          <div className='px-2 rounded shadow-sm pt-5 pb-3'>
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
          </div>
          </div>

  )
}

export default AddAddress