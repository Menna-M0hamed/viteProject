import React from 'react'
import { Link } from 'react-router-dom';
import bot from '../assets/bot.png';


const Float = () => {
  return (
    <div>
        <Link to="/" className=''><img src={bot} className='float imgFloat'/></Link>
    </div>
  )
}

export default Float
