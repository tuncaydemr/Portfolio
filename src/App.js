import React from 'react'
import Navbar from './navbar'
import CategoryList from './category-list'
import ProductList from './product-list'
import { Container, Row, Col } from 'reactstrap'


function App() {
  let categoryInfo = {title: "Category List"}
  let productInfo = {title: "Product List"}

  return (
    <div>
      <Container>
        <Row>
          <Col xs="12">
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info = {categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info = {productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
