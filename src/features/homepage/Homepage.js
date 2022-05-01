import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, selectAllProducts } from '../products/productsSlice'
import { Grid, Card, Image, Placeholder } from 'semantic-ui-react'

const Homepage = () => {
    const productList = useSelector(selectAllProducts)

    console.log(productList.loading)

    const placeholder = () => (
        <Card>
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

    const placeholders = (number = 10) => {
        const numArr = []

        for (let i = number; i > 0; i--) {
            numArr.push(i)
        }

       return numArr.map(i => placeholder())
    }

    const products = Object.values(productList).map(product => {
        const {id, title, image, price, description, category, rating} = product

        if (rating) {
            const {rate, count} = rating
            return (
                <Card key={id} >
                    <Image src={image} ui={false} />
                    <Card.Content>
                    <Card.Header>{`${title} - $${price}`}</Card.Header>
                    <Card.Meta>{category}</Card.Meta>
                    {/* <Card.Description>{description}</Card.Description> */}
                    </Card.Content>
                    <Card.Content extra>
                        <p>{`Average Rating: ${rate}* - Total Votes ${count}`}</p>
                    </Card.Content>
                </Card>
            )
        }
    })


    return (
        <Grid padded>
            <Grid.Row centered>
                <div>Homepage</div>
            </Grid.Row>
            <Grid.Row>
                <Card.Group centered>
                    {productList.loading ? placeholders(20) : products}
                </Card.Group>
            </Grid.Row>
        </Grid>
    )
}

export default Homepage