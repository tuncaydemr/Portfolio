import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class ProductList extends Component {
  render() {
    return (
      <div className='my-5'>
        <h2>Product List</h2>
        <ListGroup className='my-4'>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>Item 3</ListGroupItem>
          <ListGroupItem>Item 4</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
