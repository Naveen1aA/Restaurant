import {Component} from 'react'

import Dish from '../Dish'
import './index.css'

class Dishes extends Component {
  render() {
    const {displayData, updateCart} = this.props
    return (
      <div>
        {displayData.map(item => (
          <div key={item.dishId}>
            <h1>{item.dishName}</h1>
            <Dish key={item.dishId} item={item} updateCart={updateCart} />
          </div>
        ))}
      </div>
    )
  }
}

export default Dishes
