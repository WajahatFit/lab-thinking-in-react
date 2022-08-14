import React, { useState } from 'react'
import data from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function ProductsPage() {

    const [products, setProducts] = useState(data)
    const handleSearch = (SearchValue) => {
        if(SearchValue === ''){
          setProducts(data)
        }else {
          const filtered = products.filter(product => product.name.toLowerCase().includes((SearchValue).toLowerCase()))
          setProducts(filtered)
        }
      } 

      const handleAvailableProducts = () => {
        const filtered = products.filter(product => product.inStock && product)
          setProducts(filtered)
      }
      return (
        <div>   
            <h1>IronStore</h1>
            <SearchBar onSearch={handleSearch} availableProducts={handleAvailableProducts}/>
            <ProductTable product={products} />
        </div>
        
    
  )
}
