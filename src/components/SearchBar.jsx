import React from 'react'

export default function SearchBar(props) {
    const {onSearch} = props
  return (
    <div>
        <input type='text'  placeholder= 'Search' onChange={(e)=> onSearch(e.target.value)}>Search</input>
        <input type='checkbox'>Only show products in stock</input>
    </div>
  )
}
