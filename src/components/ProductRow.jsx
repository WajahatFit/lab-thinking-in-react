import React from 'react'


export default function ProductsRow(props) {
  const {name, price, inStock} = props;
  const color = inStock? 'red':'black'
  return (
    <tr> 
      <td className={color}>{name}</td>
      <td>${price}</td>
    </tr>
  )
}
