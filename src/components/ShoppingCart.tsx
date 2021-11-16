import React, { Component } from 'react'
import Product from './Product'

type Pro = {
  id: number
  productName: string
  price: number
  quantity: number
}
interface Istate {
  products: Array<Pro>
}

class ShoppingCart extends React.Component<{}, Istate> {
  state: Istate = {
    products: [
      { id: 1, productName: 'iPhone', price: 8900, quantity: 1 },
      { id: 2, productName: 'Xbox', price: 7780, quantity: 0 },
      { id: 3, productName: 'iPad Pro', price: 124000, quantity: 0 },
      { id: 4, productName: '荣耀p30', price: 3400, quantity: 0 },
      { id: 5, productName: '小米', price: 3000, quantity: 0 },
      { id: 6, productName: 'iPad 11', price: 3240, quantity: 0 },
    ],
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>购物车</h4>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              >
                <button className="btn btn-primary">立即购买</button>
              </Product>
            )
          })}
        </div>
      </div>
    )
  }

  handleIncrement = (product: any) => {
    let allProducts = [...this.state.products]
    let index = allProducts.indexOf(product)
    allProducts[index].quantity++
    this.setState({ products: allProducts })
  }
  handleDecrement = (product: any) => {
    let allProducts = [...this.state.products]
    let index = allProducts.indexOf(product)
    allProducts[index].quantity--
    this.setState({ products: allProducts })
  }
}
export default ShoppingCart
