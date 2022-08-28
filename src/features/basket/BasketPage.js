import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Header, Segment, Grid, Card, Container } from 'semantic-ui-react'
import { selectFilteredProducts } from '../products/productsSlice'
import { selectAllBasketItems, selectBasketTotal } from './basketSlice'
import BasketItem from './BasketItem'
import './BasketPage.scss'

const BasketPage = () => {
  const basketItems = useSelector(selectAllBasketItems)
  const basketIds = Object.keys(basketItems)
  const productDetails = useSelector(state => selectFilteredProducts(state, basketIds))
  const basketTotal = useSelector(selectBasketTotal)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)


  useEffect(() => {
    const windowResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', windowResize)
    return () => window.removeEventListener('resize', windowResize)
  })

  if (!productDetails.length > 0) {
    return (
      <>
        <Segment basic>
          <Header as='h1' size='huge' dividing>Basket</Header>
        </Segment>
        <Grid padded stackable columns='equal'>
          <Grid.Column >
            <Container fluid>
              <Header textAlign='center' as='h1' size='huge'>Basket is Empty</Header>
            </Container>
          </Grid.Column>
        </Grid>
      </>
    )
  }



  return (
    <>
      <Segment basic>
          <Header as='h1' size='huge' dividing>Basket</Header>
      </Segment>
      <Grid  reversed='computer' stackable columns={'equal'} centered>
        <Grid.Column tablet={16} computer={4}  className={windowWidth < 992 ? 'sticky-total' : ''} >
          <Card raised centered={true} fluid className={windowWidth > 991 ? 'sticky-total' : ''} >
            <Card.Content extra textAlign={'center'}>    
              <Header as='h1' size='huge' dividing>Total</Header>
              <Header as='h1' size='huge' >£{basketTotal.toFixed(2)}</Header>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card.Group >
            {
              productDetails.map((product, key) => <BasketItem key={key} details={product} /> )
            }
          </Card.Group>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default BasketPage