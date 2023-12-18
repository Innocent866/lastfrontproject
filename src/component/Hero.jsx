import React from 'react'
import heroImg from '../assets/heroimg.jpg'
import '../style/Hero.css'

const Hero = () => {
  return (
    <>
    <main>
        <img src={heroImg} alt="" className='img-l=fluid w-100 hero-img'/>
    </main>
    </>
  )
}

export default Hero