import React from 'react'
import './css/ShopCategory.css'
import Product from './Product.js'
import { useState } from 'react'
import { ShopContext } from '../Context/Context'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import all_product from "../Components/Assets/all_product";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

const ShopCategory = ( props) => {
    // const {all_product}=useContext(ShopContext)
    const [ct,setCt]=useState(1)
    const handleMore=()=>{
        if(ct===3){
        setCt(1)}
        else{
            setCt(3) 
        }
    }
    const handleLess=()=>{
        setCt(1)
    }
  return (

    <div className='shopcategory'>

        <img className='banner-img' src={props.banner}/>

        <div className='sort-by'>
            <span>Showing {ct*12} of 36 itms </span>
            <button className='bt'>Sort By</button>
        </div>
       
        {/* <div className='pros'>
            
            {all_product.map((item,i)=>{
                if(item.category===props.category){
                return (<div className='p-card' >
                        
                        <Link className='lk' to={`/Product/${item.id}`}>   <img src={item.image} alt=""></img></Link>
                        <span>{item.name}</span>
                        <div className='price'>
                            <span>{item.new_price}$</span>
                            <span>{item.old_price}$</span>
                        </div>
                </div>)
                }
                })}         
        </div> */}
        <div >
  {[...Array(ct)].map((_, index) => (
    <div key={index} className='pros'>
      {all_product.map((item, i) => {
        if (item.category === props.category) {
          return (
            <div className='p-card' key={item.id}>
              <Link className='lk' to={`/Product/${item.id}`}>
                <img src={item.image} alt="" />
              </Link>
              <span>{item.name}</span>
              <div className='price'>
                <span>{item.new_price}$</span>
                <span>{item.old_price}$</span>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  ))}
</div>

        <div className='show'>     
            <button id='more' className='show-bt' onClick={handleMore}><span>Show More</span> <img src={dropdown_icon}/></button>
        </div>

    </div>
  )
}

export default ShopCategory
