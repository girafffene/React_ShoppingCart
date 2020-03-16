import React from "react"

import Products from "./Products"
import Cart from "./Cart"

export default props => {
  return (
    <div className="wrapper">
      <Products />
      <Cart />
    </div>
  )
}
