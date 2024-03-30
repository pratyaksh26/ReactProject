import React from 'react'
import './Newsletter.css'


const Newsletter = () => {
  return (
    <div id="targetSection" className='Newsletter'>
        <div id="news-box" className='news-box'>
            <span>Get Exclusive Offers On Your Email</span>
            <span>Subscribe to our newsletter and stay updated</span>
            <div  className='e-detail'>
            <input placeholder='Your email id ' className='email'></input>
            <button className='s-bt'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
export default Newsletter
