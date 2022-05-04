import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectProduct } from './productsSlice';
import { Segment, Container, Grid, Image, Header, Button, Icon, Rating, Divider, Label } from 'semantic-ui-react'

const Product = () => {
    const { id } = useParams();
    const details = useSelector(state => selectProduct(state, parseInt(id)))
    
    //console.log(details)

    if (!details) return <></>
    
    const { title, price, description, image, rating} = details
    const {rate, count} = rating;

    

    return (
        <Segment padded='very' basic>
            <Grid columns={2} padded stackable stretched >
                <Grid.Column verticalAlign='middle'>
                <Segment padded='very' size='big' raised>

                        <Header as='h1' size='huge' dividing>{title}</Header>                                
                        <Container textAlign='left'>{description.replaceAll('/', ' / ').replaceAll(',', ', ')}</Container>
                        
                        <Divider hidden />
                        <Container fluid>
                            <Rating icon='star' defaultRating={rate} maxRating={5} size='large' />
                            <Label basic>{count} ratings</Label>
                             
                        </Container>
                        
                        <Header as='h2'>${price}</Header>
                        <Button animated='vertical' fluid>
                            <Button.Content hidden>Add to cart</Button.Content>
                            <Button.Content visible>
                                <Icon name='shop' />
                            </Button.Content>
                        </Button>  
                </Segment>

                </Grid.Column>
                <Grid.Column verticalAlign='middle'>
                    <Image src={image} wrapped centered/>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Product