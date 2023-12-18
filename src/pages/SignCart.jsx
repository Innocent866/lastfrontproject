import React from 'react'
import { Link } from 'react-router-dom'

const SignCart = () => {
  return (
    <>
    <main className='bg-white'>
        <Link to='/login'><button className='btn btn-primary w-100 btn mb-3'>Login</button></Link>
       <Link to='/signup'> <button className='btn text-danger border border-danger w-100'>SignUp</button></Link>
    </main>
    </>
  )
}

export default SignCart