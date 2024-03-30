import React, { useContext } from 'react';
import { ShopContext } from '../Context/Context';
import './css/Cart.css'
import {Link} from 'react-router-dom'

const Cart = (props) => {
    const { cart,removeItem} = useContext(ShopContext);



    if (!cart || cart.length === 0) {
        return <div className='hh'>Your cart is currently empty.</div>;
    }
    let sum=0;
    for(let i=0;i<cart.length;i++){
        sum=sum+cart[i].new_price;
    }


    return (
        <div className='cart'>
            <div className='cart-box'>
                <div className='heads'>
                    <span>Product</span>
                    <span>Title</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Total</span>
                    <span>Remove</span>
                </div>
                {cart.map((item, i) => (
                    <div className='cart-item' key={i}>
                      <Link to={`/Product/${item.id}`}>  <img src={item.image} alt={item.name} /></Link>
                        <span>{item.name}</span>
                        <span>{item.new_price}</span>
                        <span>1</span>
                        <span>{item.new_price}</span>
                        <button className='bb' onClick={()=>removeItem(item.id)}>Delete</button>
                        <div className='line'></div>
                        
                    </div>
                ))}
            </div>
            <div className='cart-bottom'>
                <div className='cart-total'> Total Price : {sum}$</div>
                <div className="promo">
                    <span>If you have a coupon code, enter it here:</span>
                    <input className='pro-input' placeholder='PROMO CODE'></input>
                </div>
            </div>
        </div>
    );
}

export default Cart;
