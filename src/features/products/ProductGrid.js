import React from 'react'
import { useSelector } from 'react-redux';
import { selectLoadingStatus } from './productsSlice'
import { Grid, Card, Placeholder } from 'semantic-ui-react'

import Products from './Products'

const ProductGrid = ({ productList }) => {

    const productLoading = useSelector(selectLoadingStatus)

    const products = Object.values(productList).map(product => {
        return product.productId ? <Products key={product.productId} details={product} /> : <></>
    })

    const placeholders = (number = 10) => {
        const numArr = []

        for (let i = number; i > 0; i--) {
            numArr.push(i)
        }

       return numArr.map(i => <Card key={i}>
                <Placeholder>
                    <Placeholder.Image square /> 
                    <Placeholder.Header>
                    <Placeholder.Line length='long' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='full' />
                    <Placeholder.Line length='full' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='very short' />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Card>
       )
    }

    return (
        <Grid padded stretched>
            <Grid.Row>
                <Card.Group centered>
                    {productLoading ? placeholders(20) : products}
                </Card.Group>
            </Grid.Row>
        </Grid>
    )
}

export default ProductGrid