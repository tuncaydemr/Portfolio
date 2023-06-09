import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  state = {
    categories :
    [
      {categoryId : 1, categoryName : "Beverages"},
      {categoryId : 2, categoryName : "Condiments"}
    ],

    currentCategory : ""
  }

  changeCategory = (category) => {
    this.setState({currentCategory : category.categoryName})
  }

  render() {
    return (
      <div className='my-5'>
        <h2>{this.props.info.title}</h2>
        <ListGroup className='my-4'>
          {
            this.state.categories.map(category => (
              <ListGroupItem onClick={() => this.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>
            ))
          }
        </ListGroup>
        <h3>{this.state.currentCategory}</h3>
      </div>

    )
  }
}
