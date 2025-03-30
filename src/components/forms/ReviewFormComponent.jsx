import { addReview } from "../../services/api"
import "./ReviewFormComponent.css"

import React, { useEffect, useState } from 'react'

const ReviewFormComponent = ({productId}) => {

    const [review, setReview] = useState({
        rating: 0,
        description: ""
    })

    const HandleChange = (e) =>{
        setReview((prevData) => ({...prevData, [e.target.name] : e.target.value}))
    }

    const HandleSubmit = (e) =>{
        addReview(review, productId)

    }

  return (
    <div>
        <h2>ADD A REVIEW!</h2>
        <p>If you are satisfied or have some complaints about the product, let other people know!</p>
        <form className="review-form-cont" onSubmit={HandleSubmit}>
            RATING:<input type="number" name="rating" value={review.rating} min="0" max="5" placeholder="1-5" onChange={HandleChange}></input>
            DESCRIPTION:<input type="text" name="description" value={review.description} placeholder="type review here..." onChange={HandleChange}></input>
            <button type="submit" id="send-button">SEND!</button>
        </form>
    </div>
  )
}

export default ReviewFormComponent