import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'

export default class CategoryList extends Component {
  render() {
    return (
      <div className='my-5'>
        <ListGroupItemHeading>Category List</ListGroupItemHeading>
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
