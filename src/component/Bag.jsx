import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Bag = () => {
    const [wk, setWk] = useState (1)
  return (
    <>
    <main className='container'>
        <div className='bg-white'>
            <p className="text-center fw-bolder">Empty Bag</p>
            <hr />
            {wk > 0 ? (<Link className='btn btn-success btn-lg'>Proceed to checkout</Link>) : ( <button className='btn btn-success btn-lg'>Continue Shopping</button>)}
        </div>

    </main>

    </>
  )
}

export default Bag