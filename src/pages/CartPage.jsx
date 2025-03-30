import React from 'react'
import "./CartPage.css"
import { useCart } from "../contexts/CartContext"
import {initCheckout} from "../services/api"
import CartItemComponent from "../components/CartItemComponent"
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from '../components/FooterComponent'
import {Link} from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";

const CartPage = () => {
    const {cart, removeFromCart} = useCart()
    let totalPrice = 0

    if(cart.length <= 0){
        return(
            <div>
                <NavbarComponent/>
                <div className='cartCheckout-wrapper'>
                    <Link to="/products" id='link'><h1><GoArrowLeft /></h1></Link>
                    <h2>YOUR SHOPPING CART IS EMPTY</h2>
                </div>
                <FooterComponent/>
            </div>
        )
    }

    return (
            <div>
                <NavbarComponent/>
                <div className='cartCheckout-wrapper'>
                    <Link to="/products" id='link'><h1><GoArrowLeft /></h1></Link>
                    <h2>YOUR SHOPPING CART</h2>
                    <div className='cartItems-cont'>
                    {
                        cart.map((product) =>{
                            return(
                                <CartItemComponent productData={product}/>
                            )
                        })
                    }
                    </div>
                    <div className='order-summary-cont'>
                        <h1>ORDER SUMMARY</h1>
                        {
                        cart.map((product) =>{
                            totalPrice += (product.price / 100) * product.quantity
                            return(
                                <p>{product.name}X{product.quantity}......{(product.price / 100) * product.quantity}€</p>
                            )
                        })
                        }
                        <p>Shipping......10€</p>
                        <h3>TOTAL: {totalPrice + 10}€</h3>
                        <p>tax included</p>
                        <button id="checkout-button" onClick={() => initCheckout(cart)}>Checkout</button>
                    </div>
                </div>

                <FooterComponent/>
    
    
            </div>
        )
    }

export default CartPage