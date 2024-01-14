import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const SignCart = () => {
  // const token = localStorage.getItem('token')
  const {loggedIn, logout} = useContext(CartContext)
  console.log(loggedIn);
  return (
    <>
    <main className='bg-white'>
      <div>
        {loggedIn ? <> <button className="btn btn-primary btn-lg" onClick={logout}>
          logout</button> </> : <> <div>
          <Link to='/login'><button className='btn btn-primary w-100 btn mb-3'>Login</button></Link>
       <Link to='/signup'> <button className='btn text-danger border border-danger w-100'>SignUp</button></Link>
            
            </div> </>}
      </div>

        
    </main>
    </>
  )
}

export default SignCart