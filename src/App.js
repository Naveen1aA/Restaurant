// App.js
import {Component} from 'react'

import CategoryList from './Components/CategoryList'
import Dishes from './Components/Dishes'
import Header from './Components/Header'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: [],
      displayData: [],
      restaurantname: '',
      cartCount: 0,
    }
  }

  componentDidMount() {
    // Fetch data from the API
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)

    const updatedData = data.map(item => ({
      restaurantName: item.restaurant_name,
      tableMenuList: item.table_menu_list,
    }))

    const totalDetails = updatedData[0]
    const {tableMenuList, restaurantName} = totalDetails

    const format = tableMenuList.map(each => ({
      categoryDishes: each.category_dishes.map(each1 => ({
        dishId: each1.dish_id,
        dishAvailability: each1.dish_availability,
        dishCalories: each1.dish_calories,
        dishCurrency: each1.dish_currency,
        dishImage: each1.dish_image,
        dishName: each1.dish_name,
        dishPrice: each1.dish_price,
        dishDescription: each1.dish_description,
      })),
      menuCategory: each.menu_category,
      menuCategoryId: each.menu_category_id,
      menuCategoryImage: each.menu_category_image,
      nextUrl: each.nexturl,
    }))
    console.log('format:-->', format)
    this.setState({total: format})
    const single = format[0]
    const {categoryDishes} = single
    this.setState({displayData: categoryDishes})
    this.setState({restaurantname: restaurantName})
  }

  updateCart = count => {
    this.setState({cartCount: count})
  }

  render() {
    const {total, displayData, restaurantname, cartCount} = this.state
    return (
      <div className="App">
        <Header restaurantName={restaurantname} cartCount={cartCount} />
        <CategoryList total={total} />
        <Dishes
          total={total}
          displayData={displayData}
          updateCart={this.updateCart}
        />
      </div>
    )
  }
}

export default App
