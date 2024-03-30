import React from 'react'
import './New.css'
import new_collections from '../Components/Assets/new_collections'
import {Link} from 'react-router-dom'

export const New = () => {
  return (
    <div id="targetSection" className='new'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='n-box'>
            {new_collections.map((prod,i)=>(
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

    </div>
  )
}
export default New
