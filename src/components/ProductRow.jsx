import React from 'react'
import data from '../data.json'

export default function ProductsRow() {

    const productInRow = data.map(product => {
        const name = product.inStock? 'red':'black'
        return (
           
            <tr key = {product._id}> 
                <td className={name}>{product.name}</td>
                <td>${product.price}</td>
            </tr>
        )
    })
  return (
    {productInRow}
  )
}
