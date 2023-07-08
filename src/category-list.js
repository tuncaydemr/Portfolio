import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>Item 3</ListGroupItem>
          <ListGroupItem>Item 4</ListGroupItem>
        </ListGroup>
      </div>

    )
  }
}
