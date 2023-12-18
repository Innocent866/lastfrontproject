import React, { useState } from "react";
import logo from "../assets/Navlogo.jpg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
// import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const [data,setData] = useState('')
  const [email, setEmail] = useState('');
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [verifypassword, setVerifypassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const navigate = useNavigate

  async function submit(e) {
    e.preventDefault();

    const regData = {
      firstname,
      lastname,
      email,
      phonenumber,
      password,
      verifypassword
    };

    try {
      const response = await fetch("http://localhost:5757/api/user/registration", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(regData),
      });
      const responseData = await response.json();
    console.log(responseData);
      if (responseData.message === "all fields are require to register") {
        toast.error(responseData.message);
        return
      }
      if (responseData.message === "email address already in use") {
        toast.error(responseData.message);
        return
      }
      if (responseData.message === "registration successfully") {
        toast.success(responseData.message);
        return
      }
      navigate('/login')
      if (responseData.message === "password and verifypassword must be the same") {
        toast.error(responseData.message);
        return
      }
      if (responseData.message === "user validation failed: password: Minimum password length must 8 character") {
        toast.error(responseData.message);
        return
      }
      if (responseData.message === "user validation failed: email: Email is invalid") {
        toast.error(responseData.message);
        return
      }
      if (responseData.message === "user validation failed: phonenumber: Minimum length must be 10") {
        toast.error(responseData.message);
        return
      }

      // if(password !== "all fields are require to register"){
      //   alert(res.message)
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center align-items-center ">
        <div className="">
          <div className="text-center">
            <Link to="/" className="mt-5">
              <img src={logo} alt="" />
            </Link>
            <h3 className="my-3">SIGN IN TO YOUR ACCOUNT</h3>
          </div>
          <div className="mt-2">
            <form>
              <label htmlFor="" className="my-2">
                FirstName:
              </label>
              <input
                type="text"
                className="w-100 rounded p-3 "
                value={firstname}
                onChange={(e)=>setFirstName(e.target.value)}
              />
              <label htmlFor="" className="my-2">
                LastName:
              </label>
              <input
                type="text"
                className="w-100 rounded p-3 "
                value={lastname}
                onChange={(e)=>setLastName(e.target.value)}
              />
              <div>
                <label htmlFor="" className="my-2">
                  Email:
                </label>
                <input
                  type="text"
                  className="w-100 rounded p-3 "
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <label htmlFor="" className="my-2">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="w-100 rounded p-3 "
                  value={phonenumber}
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="" className="my-2">
                  Password:
                </label>
                <input
                  type="text"
                  className="w-100 rounded p-3 "
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <label htmlFor="" className="my-2">
                  Confirm Password:
                </label>
                <input
                  type="text"
                  className="w-100 rounded p-3 "
                  value={verifypassword}
                  onChange={(e)=>setVerifypassword(e.target.value)}
                />
              </div>

              <div className="my-3">
                <input type="checkbox" />{" "}
                <label htmlFor="">Keep me signed in</label>
              </div>

              <button
                className="btn btn-danger text-white w-100 my-3"
                onClick={submit}
              >
                Sign In
              </button>
            </form>
            <div className="text-center d-flex justify-content-between  justify-content-lg-center ">
              <h5>Have an account? </h5>
              <Link to="/login">
                <h5>Sign in</h5>
              </Link>
            </div>
            <div className="text-center d-flex justify-content-center">
              <p className="text-center w-75">
                By Creating your Quickmunch account, you agree to the{" "}
                <Link> Terms of use </Link> and <Link> Private Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
