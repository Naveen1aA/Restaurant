// CategoryList.js
import React from 'react'

class CategoryList extends React.Component {
  render() {
    const {categories} = this.props

    return (
      <div>
        <h2>Categories</h2>
        {categories.map(category => (
          <div>
            <h1 key={category.restaurant_id}>{category.restaurant_name}</h1>
            <h1>{category.table_menu_list.menu_category}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default CategoryList
