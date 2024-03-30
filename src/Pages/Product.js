import React, { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/Context';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import './css/Productu.css';
import all_product from "../Components/Assets/all_product";
import {Link} from 'react-router-dom'

// Define handleclick function outside the component


const Product = (props) => {
    const { addtocart } = useContext(ShopContext);
    const { productId } = useParams();
    const Produ = all_product.find((e) => e.id === Number(productId));

    // const handleclick=()=>{
    //     addtocart(Produ)
    // }

    return (
        <div className='product-detali'>
            <span>Home-Shop-{Produ.category}-{Produ.name}</span>

            <div className='deat'>
                <div className='lft'>
                    <img className='lft-img' src={Produ.image} alt='Product Image' />
                    <img className='lft-img' src={Produ.image} alt='Product Image' />
                    <img className='lft-img' src={Produ.image} alt='Product Image' />
                    <img className='lft-img' src={Produ.image} alt='Product Image' />
                </div>
                <div className='middle'>
                    <img className='middle-img' src={Produ.image} alt='Product Image' />
                </div>
                <div className='rgt'>
                    <span>{Produ.name}</span>
                    <span><img src={star_icon} alt='Star Icon' /><img src={star_icon} alt='Star Icon' /><img src={star_icon} alt='Star Icon' /><img src={star_icon} alt='Star Icon' /><img src={star_dull_icon} alt='Star Icon' /></span>
                    <div className='price'><span>{Produ.new_price}$</span> <span>{Produ.old_price}$</span></div>
                    <span>A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information</span>
                    <span>Select Size</span>
                    <div className='bts'>
                        <button  className='b'>S</button>
                        <button className='b'>M</button>
                        <button className='b'>L</button>
                        <button className='b'>XL</button>
                    </div>
                    {/* Pass handleclick function as a callback to onClick event */}
                    <button className='add-cart' onClick={()=>{addtocart(Produ)}}>Add TO Cart</button>
                    <span>Tags: Modern Latest</span>
                </div>
            </div>
            <span className='tt'>Related Products</span>
            <div className='n-box'>
            {all_product.slice(0, 4).map((prod,i)=>(
                <div className='n-card'>
                  <Link className='lk' to={`/Product/${prod.id}`}>   <img className='prod-img' src={prod.image}/></Link>
                    <span>{prod.name}</span>
                    <div className='price'>
                        <span>Price : {prod.new_price}$</span>
                        <span>{prod.old_price}$</span>
                    </div>

                </div>
            ))}
        </div>
            <p className='para'>Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing. You can use ecommerce channels such as your own website, an established selling website like Amazon, or social media to drive online sales.</p>
        </div>
    )
}

export default Product; // Exporting Product component
 // Exporting handleclick function
