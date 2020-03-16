import React from "react"
import { useCart } from "../hooks"
import "../styles/Cart.css"

export default props => {
  const { cart, total, remove } = useCart()

  return (
    <div className="cart_wrapper">
      <h1>Cart</h1>
      <div className="cart">
        {cart.map(product => (
          <div className="addedCartItem">
            <img src={product.img.thumb} />
            <p className="itemTitle">{product.title}</p>
            <p>${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button className="removeButton" onClick={e => remove(product.id)}>
              X
            </button>
          </div>
        ))}
      </div>
      <div className="total">
        <h2>Total: ${total}</h2>
      </div>
    </div>
  )
}
