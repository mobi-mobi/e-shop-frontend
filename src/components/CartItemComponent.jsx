import "./CartItemComponent.css"
import { useCart } from "../contexts/CartContext"

const ProductCardComponent = ({productData}) =>{

    const {removeFromCart} = useCart()

    return(
        <div className="cart-card-cont">
            <img src={productData.image} alt="imidz" />
            <div className="cartItem-details">
                <p>{productData.name}</p>
                <p>{productData.price / 100}€</p>
                <p>X{productData.quantity}</p>
                <button id="remove-button" onClick={() => removeFromCart(productData._id)}>REMOVE</button>
            </div>
        </div>
    )
}

export default ProductCardComponent