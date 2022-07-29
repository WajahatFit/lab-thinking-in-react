import React from 'react'
import ProductsRow from './ProductRow'

export default function ProductTable(props) {
    const { product } = props
  return (
    <div>
        <table>
            <tr>
                <th>{product.name}</th>
                <th>{product.price}</th>
            </tr>
            <ProductsRow />
            
        </table>
    </div>
  )
}
