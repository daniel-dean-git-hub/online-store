import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getProducts } from './features/products/productsSlice'

import HomePage from './features/homepage/Homepage'


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (    
    <Router>
      {/* <Navbar loggedIn={false} /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/products' element={<ProductsPage />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='/user' element={<UserAccountPage />} />
        <Route path='/login' element={<UserLoginPage />} />
        <Route path='/product/:id' element={<ProductPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
