import React, { useState, useEffect, useMemo } from 'react';
import { GoArrowLeft } from "react-icons/go";
import {Link} from "react-router-dom"

import "./ProductsPage.css"
import ProductCardComponent from '../components/ProductCardComponent';
import { fetchAllKeychains } from '../services/api';
import NavbarComponent from '../components/NavbarComponent';
import PromobarComponent from '../components/PromobarComponent';
import FooterComponent from "../components/FooterComponent";

function ProductsPage() {
  const [keyChains, setKeyChains] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('none')
  

  useEffect(() =>{
      async function loadKeychains() {
          try{
              const data = await fetchAllKeychains();
              setKeyChains(data)
          }
          catch(err){
              setError(err.message)
          }
          finally{
              setLoading(false)
          }
      }

      loadKeychains()

  }, []);

  const sortedKeyChains = useMemo(() => {
    let sorted = [...keyChains]

    if(filter === "asc"){
      sorted.sort((a,b) => (a.price - b.price))
    } else if(filter === "desc"){
      sorted.sort((a,b) => (b.price - a.price))
    }

    return sorted
  }, [filter, keyChains])

  if(loading) return(<p>loading page...</p>)
  if(error) return(<p>Error : {error}</p>)

  return (
    <div className='products-wrapper'>
      <div className="bars">
        <PromobarComponent/>
        <NavbarComponent/>
      </div>
      <div className='header-filter-cont'>
        <div className='header-cont'>
          <Link to="/" id='link'><h1><GoArrowLeft /></h1></Link>
          <h1>PRODUCTS</h1>
        </div>


        <div className='filter-cont'>
          Sort by:<select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="none">None</option>
            <option value="asc">Cheapest</option>
            <option value="desc">Most expensive</option>
          </select>
        </div>

      </div>
      <main>
      <div className='products-cont'>
          {
              sortedKeyChains.map((keyChain) => (
                <div className='product-cont'>
                  <ProductCardComponent productData={keyChain}/>
                </div>
              ))
          }
      </div>
      </main>
      <FooterComponent/>
    </div>
  );
}

export default ProductsPage;