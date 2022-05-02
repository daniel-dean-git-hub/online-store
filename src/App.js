import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getProducts } from './features/products/productsSlice'

import { Container } from 'semantic-ui-react'

import Header from './features/header/Header'
import ProductGrid from './features/products/ProductGrid'
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
      {/* <Navbar loggedIn={false} /> */}
      <Container>
        <Routes>
          <Route path='/Products/:Item/:id' element={ <Product /> } />
          <Route path='/Products/:Item' element={ <Category /> } />
          <Route path='/Products' element={ <ProductGrid /> } />
          <Route path='/' element={ <Home /> } />
          {/* <Route path='/products' element={<ProductsPage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/user' element={<UserAccountPage />} />
          <Route path='/login' element={<UserLoginPage />} />
          <Route path='/product/:id' element={<ProductPage />} /> */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
