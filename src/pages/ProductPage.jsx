import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchKeychainBySlug } from "../services/api"
import { useCart } from "../contexts/CartContext"
import { useNavigate } from 'react-router-dom';
import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent";
import "./ProductPage.css"
import {Link} from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";
import ReviewFormComponent from "../components/forms/ReviewFormComponent";

const ProductPage = () =>{
    const {addToCart} = useCart()
    const {slug} = useParams()
    const [keyChain, setKeyChain] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showReviews, setShowReviews] = useState(false)
    const navigate = useNavigate()

    useEffect(() =>{
        loadKeyChain()
    }, []);

    async function loadKeyChain() {
        try{
            const data = await fetchKeychainBySlug(slug);
            setKeyChain(data)
            setKeyChain(prevData => ({
                ...prevData, ['quantity'] : 1
            }))

        }
        catch(err){
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }

    function setKeyChainQuantity(e){
        setKeyChain(prevData => ({
            ...prevData, ['quantity'] : Number(e.target.value)
        }))
    }


    if(loading) return(<p>loading page...</p>)
    if(error) return(<p>Error : {error}</p>)
    
    return(
        <div>
            <NavbarComponent/>
            <div className="product-wrapper">
                <div className="idk">
                    <div id="product-upper-section">
                        <Link to="/products" id='link'><h1><GoArrowLeft /></h1></Link>
                        <h2>{keyChain.name}</h2>
                    </div>
                    <div className="img-cont">
                        <img src={keyChain.image} alt={keyChain.name} />
                    </div>
                </div>
                <div className="product-desc-cont">
                    <h1>{keyChain.name}</h1>
                    <h3>{keyChain.price / 100}€</h3>
                    <p>Tax included. Shipping calculated at checkout.</p>
                    Select amount : <input id="quantity-input" type="number" min = "1" max = "50" placeholder="1" onChange={setKeyChainQuantity}/>
                    <button id="add-button" onClick={() => {addToCart(keyChain), navigate('/cart')}}>Add to cart</button>
                </div>

            </div>
            <div className="reviews-wrapper">
                <div className="review-title-cont" onClick={() => setShowReviews(!showReviews)}>
                    <h2>REVIEWS</h2>
                </div>
                <div className="reviews-and-form-cont">
                    <div className="reviews-cont">
                {
                    showReviews?(
                        keyChain.reviews.length > 0?(
                            keyChain.reviews.map((item, index) =>{
                                return (<div key={index} className="review-cont">
        
                                        <h3>RATING: {item.rating}/5</h3>
                                        <p>{item.description}</p>
                                    
                                    </div>)
                            })
                        ):
                        (<h1>no reviews yet!</h1>)

                )
                :
                (<div></div>)
                } 
                    </div>
                {
                    showReviews?(
                        <ReviewFormComponent productId={keyChain._id}/>
                    )
                    :
                    (<h1></h1>)
                }
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default ProductPage