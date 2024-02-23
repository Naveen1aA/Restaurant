import React from 'react'
import './index.css'

class Header extends React.Component {
  render() {
    const {restaurantName, cartCount} = this.props
    return (
      <div>
        <div className="header">
          <h2>{restaurantName}</h2>
          <p>My Orders {cartCount}</p>
        </div>
        <hr />
      </div>
    )
  }
}

export default Header
