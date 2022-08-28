import React from 'react'
import './Category.scss'

import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAllProductsFromCategory } from '../products/productsSlice'

import { Header, Segment } from 'semantic-ui-react'

import ProductGrid from '../products/ProductGrid'

const Category = () => {
    const { pathname } = useLocation()
    let category = pathname.split('/')
    category = decodeURIComponent(category[category.length-1])

    const productList = useSelector((state) => selectAllProductsFromCategory(state,category))

    return (
        <>
            <Segment basic>
                <Header as='h1' size='huge' dividing className="uppercase">{category}</Header>
            </Segment>
            <ProductGrid productList={productList}/>
        </>
    )
}

export default Category