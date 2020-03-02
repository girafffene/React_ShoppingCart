import React from "react"
import { useProducts } from "../redux/ducks/products"

export default props => {
  const { products } = useProducts()

  return (
    <div className="products">
      {products.map(product => {
        ;<div className="product">
          <img src="{product.img.normal}" />
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      })}
    </div>
  )
}
