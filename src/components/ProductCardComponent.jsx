import {Link} from "react-router-dom"
import "./ProductCardComponent.css"

const ProductCardComponent = ({productData}) =>{
    return(
        <div className="product-card-cont">
            <img src={productData.image} alt="imidz" />
            <div className="product-details">
                <p>{productData.name}</p>
                <p>{productData.price / 100}€</p>
                <Link id="seemore-link" to={`/product/${productData.slug}`}>See more</Link>
            </div>
        </div>
    )
}

export default ProductCardComponent