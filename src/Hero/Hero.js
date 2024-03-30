import React from 'react'
import './Hero.css'
import hero_image from '../Components/Assets/hero_image.png'
import hand_icon from '../Components/Assets/hand_icon.png'
import arrow from '../Components/Assets/arrow.png'
import New from '../New/New'
import { Link as ScrollLink } from 'react-scroll';
const Hero = () => {
  return (
    <div className='hero'>
        <div className='h-left'>
            <span>NEW ARRIVALS ONLY</span>
            <span>new <img className='hand_icon' src={hand_icon} alt=''/>collection for everyone</span>
            <button  className='col-bt'><ScrollLink
          to="targetSection"
          spy={true}
          smooth={true}
          offset={-70} // adjust this offset as needed
          duration={500}
        >Latest Collections  <img className='arrow' src={arrow} alt=''/></ScrollLink></button>
        
        </div>
        <div className='h-right'>
            <img className='hero-img' src={hero_image} alt=''/>
        </div>
        
    </div>
  )
}
export default Hero
