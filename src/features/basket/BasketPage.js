import React from 'react'
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../products/productsSlice'
import { selectAllBasketItems } from './basketSlice'
import BasketItem from './BasketItem'

const BasketPage = () => {
  const basketItems = useSelector(selectAllBasketItems)
  const basketIds = Object.keys(basketItems)
  const productDetails = useSelector(state => selectFilteredProducts(state, basketIds))

  

  return (
    <>
      <div>BasketPage</div>
      <div>{
        productDetails.map((product, key) => <BasketItem key={key} details={product} /> )
      }</div>
      <div>Total</div>
    </>
  )
}

export default BasketPage