import "./AddFormComponent.css"

import React from 'react'

const AddFormComponent = ({newProduct, HandleChange, submitForm}) => {
  return (
    <div className="add-form-wrapper">
        <h2>ADD PRODUCT</h2>
        <form onSubmit={submitForm} className="add-form-cont">
            Name : <input type="text" name="name" value={newProduct.name} onChange={HandleChange}/>
            Price in cents : <input type="number" name="price" value={newProduct.price} onChange={HandleChange}/>
            Slug : <input type="text" name="slug" value={newProduct.slug} onChange={HandleChange}/>
            Image-link : <input type="text" name="image" value={newProduct.image} onChange={HandleChange}/>
            <button type="submit" id="send-button">SEND</button>
        </form>
    </div>
  )
}

export default AddFormComponent