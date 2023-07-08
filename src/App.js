import React from 'react'
import Navbar from './navbar'
import CategoryList from './category-list'
import ProductList from './product-list'
import { Container, Row, Col } from 'reactstrap'


function App() {
  let categoryTitle = "Category List";
  let productTitle = "Product List";
  
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
            <CategoryList title={categoryTitle} />
          </Col>
          <Col xs="9">
            <ProductList title={productTitle} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
