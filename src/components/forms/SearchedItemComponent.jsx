import "./SearchedItemComponent.css"
import React, { useEffect } from 'react'
import {useState} from 'react'
import { deleteKeychain, updateProduct } from '../../services/api'

const SearchedItemComponent = ({productData}) => {
    const [viewDetails, setViewDetails] = useState(false)
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(productData)
    const [responseMessage, setResponseMessage] = useState("")

    const HandleChange = (e) =>{
        setProduct( prevData => ({...prevData, [e.target.name] : e.target.value}))
      }


    const HandleSubmit = (e) =>{
        e.preventDefault()
        updateProduct(product)
      }

    const removeKeyChain = async() =>{
        const res = await deleteKeychain(productData._id)

        setResponseMessage(res)
        
        setTimeout(() => setResponseMessage(""), 2000)
      } 
    useEffect(() =>{
        if(!viewDetails){
            setProduct(productData)
        }
        if (product){
            setLoading(false)
        }
        
    }, [productData, product])

    if(loading) return(<div><h1>...</h1></div>)

  return (
    <div className="searched-product-wrapper">
        <p id="header-text">{product.name}</p>
        <button id="send-button" onClick={() => setViewDetails(!viewDetails)}>EDIT</button>
        {
            viewDetails == true?
                    (   
                        <div>
                            <form onSubmit={HandleSubmit} className='edit-form-cont'>
                            Name : <input type="text" name="name" value={product.name} onChange={HandleChange}/>
                            Price in cents : <input type="number" name="price" value={product.price} onChange={HandleChange}/>
                            Slug : <input type="text" name="slug" value={product.slug} onChange={HandleChange}/>
                            Image-link : <input type="text" name="image" value={product.image} onChange={HandleChange}/>
                            <button type="submit" id="send-button">APPLY CHANGES</button>
                            <button id="send-button" onClick={removeKeyChain}>DELETE</button>
                            </form>
                        </div>
                    )
                    :
                    (
                        <div></div>
                    )

        }
        <p>{responseMessage}</p>
    </div>
  )
}

export default SearchedItemComponent