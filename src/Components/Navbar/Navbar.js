import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/Context'



 const Navbar = (props) => {
    const {clen}=useContext(ShopContext)
    
    const [menu,setMenu]=useState("shop")

  return (
    <div className='navbar'>
        
        <div className='n-left'>
            
        <Link to="/"><img src={logo} className='logo'/> </Link>
        <Link className='nn' style={{textDecoration:'none'}}  to="/"><span>SHOPPER</span></Link>
           
        </div>
       
        
            <ul className='n-ul'>
                <li onClick={()=>{setMenu("shop")}} ><Link  className='nn'  style={{textDecoration:'none'}} to="/">Shop</Link> <hr/></li>
                <li  onClick={()=>{setMenu("men")}} ><Link  className='nn'  style={{textDecoration:'none'}} to="/mens">Men</Link></li>
                <li  onClick={()=>{setMenu("women")}} ><Link  className='nn'  style={{textDecoration:'none'}} to="/womens">Women</Link></li>
                <li onClick={()=>{setMenu("kids")}} ><Link  className='nn'  style={{textDecoration:'none'}} to="/kids">Kids</Link></li>
            </ul>
        

        <div className='n-right'>
            <Link to="/login"><button className='login-bt'>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt=''></img></Link>
            <div className='cart-count'>{clen}</div>
        </div>
    </div>
  )
}

export default Navbar