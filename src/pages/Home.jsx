import React, { useEffect, useState, useContext } from 'react'
import jazzy from '../assets/image 4.jpg'
import Spinner from 'react-bootstrap/Spinner'
import Hero from '../component/Hero'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image5 from '../assets/image 5.jpg'
import image6 from '../assets/image 6.jpg'
import image7 from '../assets/image 7.jpg'
import image8 from '../assets/image 8.jpg'
import image9 from '../assets/image 9.jpg'
import '../style/Home.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import axios from 'axios';


const Home = () => {

  const {handleAddToCart} = useContext(CartContext)
  const notify = () => {
    toast("An item has been added",{
      position:toast.POSITION.TOP_CENTER
    });
  };

  const [ data, setData] = useState ([])
  const [load, setLoad] = useState(false)
  const [minu, setMinu] = useState(0)

  const minus = ()=>{
    setMinu(minu-1)
  }

     const add = ()=>{
     setMinu(minu+1)
   }

  const getDate = async ()=>{
    try {
      setLoad(true)
      const data = await fetch("https://gazzy.onrender.com/api/products",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      });
      
      const response = await data.json();
      setData(response.product)
      console.log(response.product);
    } catch (error) {
      console.log(error)
    }finally{
      setLoad(false)
    }

  }


    useEffect (()=>{
        document.title= 'Home || Page'
        getDate()
    },[])
  return (
    <div className=''>
      {load && <Spinner animation="border" className='position-absolute top-50 start-50 text-danger'/>}
        <Hero/>
       <div className='d-flex justify-content-between my-5'>
          <img src={jazzy} alt="" className='d-none d-lg-block w-25 me-2 me-md-3'/>
        <div className=' container row'>
                {data.map((datum) => {
                const {title,price,image,_id,quantity} = datum;
                return(
                    <div key={_id} className='col-9 col-md-6 justify-content-between mb-3 col-lg-4'>
                      <Card className='card' >
                    <Card.Img variant="top" src={image} className='w-100'/>
                    <Card.Body>
                     <p>{title}</p>
                     <div className='d-flex align-items-center justify-content-between'>
                      <div>
                      total price
                        <h4>N{price}</h4>
                      </div>

                     <p className='addfont d-flex px-2 align-items-center'>
                      <button className='btn' onClick={minus}>-</button>
                      {quantity}
                      <button className='btn' onClick={add}>+</button>
                      </p>
                     </div>

                     <div className='d-flex justify-content-between w-100'>
                      <img src={image5} alt="" />
                      <img src={image6} alt="" />
                      <img src={image7} alt="" />
                      <img src={image8} alt="" />
                      <img src={image9} alt="" />
                     </div>
                     <Button variant="danger" className='w-100' onClick={()=>{handleAddToCart(datum);notify()}}> <span>+</span> Add to cart</Button>
                     <ToastContainer/>
                    </Card.Body>
                    </Card>
                    </div>
                )
            })}
        </div>  
       </div>

    </div>
  )}

export default Home;