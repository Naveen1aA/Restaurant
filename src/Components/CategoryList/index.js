// CategoryList.js
import React from 'react'
import './index.css'

class CategoryList extends React.Component {
  render() {
    const {total} = this.props

    return (
      <div className="displayCategory">
        {total &&
          total.map(category => (
            <div>
              <h1 key={category.menuCategoryId} className="tab">
                {category.menuCategory}
              </h1>
            </div>
          ))}
      </div>
    )
  }
}

export default CategoryList
