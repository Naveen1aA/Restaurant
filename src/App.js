// App.js
import {Component} from 'react'

import CategoryList from './Components/CategoryList'
import DishList from './Components/DishList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
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

    this.setState({categories: data})

    console.log(data)
  }

  render() {
    const {categories} = this.state

    return (
      <div className="App">
        <CategoryList categories={categories} />
        <DishList categories={categories.table_menu_list} />
      </div>
    )
  }
}

export default App
