import React from 'react'
import "./SearchFormComponent.css"
import SearchedItemComponent from './SearchedItemComponent'

const SearchFormComponent = ({search, keyChains, handleSearchChange}) => {

  return (
    <div className='search-item-wrapper'>
      <h2>SEARCH PRODUCTS</h2>
        Type Product: <input type="text" name="search" placeholder="input name here..." value={search} onChange={handleSearchChange}/>
          <ul>
            {
                keyChains.map((item, index) =>{
                    return (
                        <div key={index}>
                            <SearchedItemComponent productData={item}/>
                        </div>
                )
                })
            }
          </ul>
    </div>
  )
}

export default SearchFormComponent