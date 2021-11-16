import react, { Component } from 'react'

type Pro = {
  id: number
  productName: string
  price: number
  quantity: number
}
interface Iprops {
  product: Pro
  onIncrement: (product: object) => void
  onDecrement: (product: object) => void
}
type Istate = {
  product: Pro
}

export default class Product extends Component<Iprops, Istate> {
  state: Istate = {
    product: this.props.product,
  }
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">#{this.state.product.id}</div>
            <h5 className="pt-5 border-top">{this.state.product.productName}</h5>
            <div>${this.state.product.price}</div>
          </div>
          {/* card-body在这里结束 */}
          <div className="card-footer">
            <div className="float-left">
              <span className="p-2">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product)
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    if (this.state.product.quantity > 0) {
                      this.props.onDecrement(this.state.product)
                    }
                  }}
                >
                  -
                </button>
              </div>
              <span className="float-end">{this.props.children}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
