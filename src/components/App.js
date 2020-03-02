import React from "react"
import "../styles/App.css"
import Products from "./products"
import Cart from "./cart"

export default props => {
  return (
    <div>
      <Products />
      <Cart />
    </div>
  )
}
