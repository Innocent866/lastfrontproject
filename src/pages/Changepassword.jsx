import React, { useState } from 'react'
import logo from '../assets/Navlogo.jpg'
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";

const Changepassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(e) {
    e.preventDefault()

    const regData ={
      password,

    }

    try {
      const response = await fetch("http://localhost:5757/api/user/resetpassword/:resetToken", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
          "Content-type": "application/json"
        },
        body: JSON.stringify(regData),
      });
      const responseData = await response.json();
    console.log(responseData);
   
    

    } catch (error) {
      console.log(error.responseData);
    }
  }

  return (
    <div className='container'>
        <div className='d-flex justify-content-center align-items-center '>
           <div className=''>
          <div className="text-center mt-4 pb-5">
          <Link to='/'><img src={logo} alt="" /></Link>
           <h3>CHANGE PASSWORD</h3>
          </div>
           <div className='mt-5'>
            <form >
                <label htmlFor="" className='my-2'>PassworD:</label>
                <input type="text" className='w-100 rounded p-3 ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="" className='my-2'>New Password:</label>
                <input type="text" className='w-100 rounded p-3 ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
               
                   <div>
                   <input type="checkbox" /> <label htmlFor="">Keep me signed in</label>
                   </div>
                  
               
                <button className="btn btn-danger text-white w-100 my-3" onClick={login}>Sign In</button>
            </form>
           <div className="text-center d-flex justify-content-between  justify-content-lg-center ">
           <h5>Dont have an account? </h5>
            <Link to='/signup'><h5>Create One</h5></Link>
           </div>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Changepassword