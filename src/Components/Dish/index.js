import {Component} from 'react'

import './index.css'

class Dish extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  addItem = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
    const {updateCart} = this.props
    updateCart(this.count) // Use prevState.count here
  }

  removeItem = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
    const {updateCart} = this.props
    updateCart(this.count) // Use prevState.count here
  }

  render() {
    const {item} = this.props
    const {count} = this.state

    console.log(count)

    return (
      <div className="dish">
        <div className="dish2">
          <div>
            <img alt="img" src={item.nextUrl} />
          </div>
          <div>
            <h4 key={item.dishName}>{item.dishName}</h4>
            <div className="dish1">
              <h1 key={item.dishCurrency}>{item.dishCurrency}</h1>
              <h1 key={item.dishPrice}>{item.dishPrice}</h1>
            </div>
            <p>{item.dishDescription}</p>
            <div>
              {item.addonCat && <p>Customizations available</p>}
              <div className="button">
                <button onClick={this.removeItem} type="button">
                  -
                </button>
                <span>{count}</span>
                <button onClick={this.addItem} type="button">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1>{item.dishCalories} Calories</h1>
          </div>
          <div className="dishImage">
            <img alt="img" src={item.dishImage} className="image" />
          </div>
        </div>
      </div>
    )
  }
}

export default Dish
