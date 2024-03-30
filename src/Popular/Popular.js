import React from 'react'
import './Popular.css'
import data_product from '../Components/Assets/data'
import {Link} from 'react-router-dom'

const Popular = () => {
  return (
    <div className='popular'>
        <div className='p-heading'>
             <h1>POPULAR IN WOMEN</h1>
            <hr/>
        </div>
        
        <div className='p-box'>
            {data_product.map((prod,i)=>(
                <div className='p-card'>
                   <Link className='lk' to={`/Product/${prod.id}`}>    <img className='prode-img' src={prod.image}/></Link>
                    <span>{prod.name}</span>
                    <div className='price'>
                        <span>{prod.new_price}$</span>
                        <span>{prod.old_price}$</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Popular
