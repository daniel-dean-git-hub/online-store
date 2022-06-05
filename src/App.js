import React, {useEffect} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getProducts } from './features/products/productsSlice'

import { Container } from 'semantic-ui-react'

import Header from './features/header/Header'
import ProductPage from './features/products/ProductPage'
import Product from './features/products/Product'
import Home from './features/home/Home'
import Category from './features/category/Category'

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (    
    <Router>
      <Header style={{height: '100vh'}}/>
      <Container>
        <Routes>
          <Route path='Products/:Item/:id' element={ <Product /> } />
          <Route path='Products/:Item' element={ <Category /> } />
          <Route path='Products' element={ <ProductPage /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
