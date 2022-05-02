import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllProducts } from './productsSlice'
import ProductGrid from './ProductGrid'

const ProductPage = () => {
    const productList = useSelector(selectAllProducts)
    return (
        <ProductGrid productList={productList}/>
    )
}

export default ProductPage