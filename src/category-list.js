import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  constructor (props) {
    super(props);
    state:{}
  }
  render() {
    return (
      <div className='my-5'>
        <h2>{this.props.title}</h2>
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
