import { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext=createContext(null);




const ShopContextProvider=(props)=>{

        const [cart,setCart]=useState([]);
        const addtocart=(Produ)=>{
            setCart([...cart,Produ])
            console.log(cart);
        }
        const clen=cart.length;

        const removeItem = (id) => {
            const updatedCart = cart.filter((item) => item.id !== id);
            setCart(updatedCart);
        };


        const contextValue = {
            all_product,    
            cart,
            addtocart,
            clen,
            removeItem
            
        };
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider