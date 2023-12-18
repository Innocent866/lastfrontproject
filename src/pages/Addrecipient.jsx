import React from 'react'
import '../style/addrecipient.css'


const Addrecipient = () => {
  return (
    <div className='container'>
       
            
           <div className='mt-5 row'>
          <div className='bgc col-lg-6 px-2 rounded shadow-sm pt-5 pb-3'>
          <h1 className='fs-1 text-center mb-4 '>Update Recipient</h1>
            <form >
                <label htmlFor="" className='my-2 w-100'>Email:</label>
                <input type="text" className='w-100 rounded p-3 '/>
                <label htmlFor="" className='my-2 w-100'>Password:</label>
                <input type="text" className='w-100 rounded p-3 '/>
                <div>
                <label htmlFor="" className='my-2 w-100'>Email:</label>
                <input type="text" className='w-100 rounded p-3 '/>
                <label htmlFor="" className='my-2 w-100'>Password:</label>
                <input type="text" className='w-100 rounded p-3 '/>
                </div>
                <button className="btn btn-danger text-white w-100 mt-5 p-3">Submit</button>
            </form>
          
           </div>
        
           <div className='bgc col-lg-6 col-12 rounded '>
          <div className=' px-2 rounded shadow-sm pt-5 pb-3'>
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

export default Addrecipient