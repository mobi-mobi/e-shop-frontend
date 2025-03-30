
const fetchFeaturedKeychains = async() =>{
    const res = await fetch('http://localhost:5000/api/products')
    if(!res.ok) throw new Error("Failed to fetch featured keychains")
    return res.json()
}

const fetchAllKeychains = async() =>{
    const res = await fetch('http://localhost:5000/api/products')
    if(!res.ok) throw new Error("Failed to fetch keychains")
    return res.json()
}

const fetchKeychainBySlug = async(slug) =>{
    const res = await fetch(`http://localhost:5000/api/product/${slug}`)
    if(!res.ok) throw new Error("Failed to fetch keychain")
    return res.json()
}

const deleteKeychain = async(id) =>{
    try{
        const res = await fetch(`http://localhost:5000/api/delete`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                id : id,
            })
    
        })

        if (!res.ok) {
            throw new Error('Failed to delete product');
        }

        const data = await res.json()
        const responseMessage = data.message
        return responseMessage

    } catch(err){
        console.log(err)
    }
}

const getLatestKeychains = async() =>{
    const res = await fetch('http://localhost:5000/api/latestProducts')
    if(!res.ok) throw new Error("Failed to fetch keychains")
    return res.json()
}

const initCheckout = async(products) =>{
    try{
        const res = await fetch(`http://localhost:5000/api/checkout`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                items : products,
            })
    
        })

        if (!res.ok) {
            throw new Error('Failed to create checkout session');
        }

        const data = await res.json()

        window.location.href = data.checkoutUrl

    } catch(err){
        console.log(err)
    }
}

const addProduct = async(newProduct) =>{
    try{
        const res = await fetch(`http://localhost:5000/api/addProduct`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                product : newProduct,
            })
    
        })

        if (!res.ok) {
            throw new Error('Failed to create new product');
        }

        const data = await res.json()
        const responseMessage = data.message
        console.log(data);
        return responseMessage

    } catch(err){
        console.log(err)
    }
}

const addReview = async(reviewData, productId) =>{
    console.log(productId);
    console.log(reviewData);
    
    
    try{
        const res = await fetch(`http://localhost:5000/api/addReview`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                id : productId,
                review : reviewData,
            })
    
        })

        if (!res.ok) {
            throw new Error('Failed to create new review');
        }

        const data = await res.json()

        console.log(data);

    } catch(err){
        console.log(err)
    }
}

const updateProduct = async(newProduct) =>{
    try{
        const res = await fetch(`http://localhost:5000/api/update`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                product : newProduct,
            })
    
        })

        if (!res.ok) {
            throw new Error('Failed to update new product');
        }

        const data = await res.json()
        const responseMessage = data.message
        return responseMessage

    } catch(err){
        console.log(err)
    }
}

export {fetchFeaturedKeychains, fetchAllKeychains, fetchKeychainBySlug, initCheckout, addProduct, deleteKeychain, updateProduct, getLatestKeychains, addReview}