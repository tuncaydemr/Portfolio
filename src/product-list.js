import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div className='my-5'>
        <h2>{this.props.info.title}</h2>
      </div>
    )
  }
}
