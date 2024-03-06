import React from 'react'
import { Link } from 'react-router-dom'


const Subscribe = () => {
  return (
    <div className='subscribe' id='sub'>
      <h5>انضم لنا فى برنامج صبغة الله تحت اشراف الشيخ حسين عبدالرازق</h5>
      <Link to="https://t.me/sbghtollah_bot">
      <button className='myBtn mt-4'>سجل الآن</button>
      </Link>
    </div>
  )
}

export default Subscribe