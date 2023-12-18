import React, { useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom';

const Home = () => {

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
      let data = await fetch('http://localhost:5757/api/products');
      let response = await data.json();
      setData(response.product)
      console.log(response);
    } catch (error) {
      console.log(response.error)
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
       <div className='container d-flex justify-content-between my-5'>
          <img src={jazzy} alt="" className='d-none d-lg-block w-25 me-5 me-md-3'/>
        <div className=' container row'>
                {data.map((datum) => {
                const {title,price,image,_id} = datum;
                return(
                    <div key={_id} className='col-9 col-md-6 justify-content-between  col-lg-4'>
                      <Card className='card' >
                    <Card.Img variant="top" src={image} className='w'/>
                    <Card.Body>
                     <p>{title}</p>
                     <div className='d-flex align-items-center justify-content-between'>
                      <div>
                      total price
                        <h4>N{price}</h4>
                      </div>

                     <p className='addfont'>
                      <button className='btn' onClick={minus}>-</button>
                      {minu}
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
                     <Link to='/review'> <Button variant="danger" className='w-100'> <span>+</span> Add to cart</Button></Link>
                    </Card.Body>
                    </Card>
                    </div>
                )
            })}
        </div>  
       </div>

    </div>
  )
}

export default Home