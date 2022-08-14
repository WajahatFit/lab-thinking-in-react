import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    const { product } = props
  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((eachProduct) => {
            console.log(eachProduct)
            return (
              <ProductRow
                name={eachProduct.name}
                price={eachProduct.price}
                inStock={eachProduct.inStock}
              />
            
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
