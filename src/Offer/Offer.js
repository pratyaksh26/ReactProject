import React from 'react'
import './Offer.css'
import exclusive_image from '../Components/Assets/exclusive_image.png'
import { ScrollLink } from 'react-scroll'
import Newsletter from '../Newsletter/Newsletter'


const Offer = () => {
  return (
    <div className='offer'>
        <div className='offer-box'>
          <div className='o-left'>
              <span>Exclusive Offer For You</span>
              <span>Only on best seller producst</span>
              <button className='o-bt'>Check Now</button>
              

          </div>

          <div className='o-right'>
            <img src={exclusive_image} alt=""/>
          </div>
        </div>
    </div>
  )
}
export  default Offer
