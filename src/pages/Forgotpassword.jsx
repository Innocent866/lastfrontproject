import React from 'react'

const Forgotpassword = () => {

    const [email, setEmail] = useState('');
    
  return (
    <div className='container'>
        <div className='d-flex justify-content-center align-items-center '>
           <div className=''>
          <div className="text-center mt-4 pb-5">
          <Link to='/'><img src={logo} alt="" /></Link>
           <h3>SIGN IN TO YOUR ACCOUNT</h3>
          </div>
           <div className='mt-5'>
            <form >
                <label htmlFor="" className='my-2'>Email:</label>
                <input type="text" className='w-100 rounded p-3 ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div className='d-flex justify-content-between my-4'>
                   <div>
                   <input type="checkbox" /> <label htmlFor="">Keep me signed in</label>
                   </div>
                   <Link to='/changePassword'>Reset Password</Link>
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

export default Forgotpassword