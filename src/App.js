import React from 'react';
import Navbar from './navbar';
import CategoryList from './category-list';
import ProductList from './product-list';
import { Container, Row } from 'reactstrap';


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <Row>
          <CategoryList />
          <ProductList />
        </Row>
      </Container>
    </div>
  );
}

export default App;
