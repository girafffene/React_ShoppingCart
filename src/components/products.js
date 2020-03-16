import React from "react"
import { useProducts, useCart } from "../hooks/index"
import "../styles/Products.css"
import { AiOutlineMinus } from "react-icons/ai"

export default props => {
  const { products } = useProducts()
  const { add } = useCart()

  return (
    <div className="products">
      {products.map(product => (
        <div className="product">
          <div className="freeTag">
            <p>Free Shipping</p>
          </div>
          <img src={product.img.normal} />
          <p>{product.title}</p>
          <p className="dash">
            <AiOutlineMinus />
          </p>
          <p className="price">${product.price.toFixed(2)}</p>
          <button onClick={e => add(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  )
}
