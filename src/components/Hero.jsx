import React from 'react'
import cover from '../assets/cover.jpg'
import Image from 'react-bootstrap/Image';


const Hero = () => {
  return (
    <Image src={cover} fluid className='mb-4' />
  )
}

export default Hero