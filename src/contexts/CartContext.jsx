import {createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() =>{
        console.log(cart);
    }, [cart])

    const addToCart = (item) =>{
        if (cart.some(data => data.name === item.name)){
            setCart(cart.map(data => data.name === item.name ? {...data, ['quantity'] : data['quantity'] + item['quantity']} : data))

        }else{
            setCart((prevCart) => [...prevCart, item])
        }
    }

    const removeFromCart = (itemId) =>{
        setCart((prevCart) => prevCart.filter((item) => item._id !== itemId))
    }

    const clearCart = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
