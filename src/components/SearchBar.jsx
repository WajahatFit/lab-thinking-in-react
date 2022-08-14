import React from 'react'

export default function SearchBar({onSearch, availableProducts}) {
  return (
    <div>
        <input type='text'  placeholder= 'Search' onChange={(e)=> onSearch(e.target.value)}>Search</input>
        <input type='checkbox' onChange={() => availableProducts()}>Only show products in stock</input>
    </div>
  )
}
