import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Image, Placeholder, Button, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {   
  addItem,
  deleteItem, 
  updateItemQuantityByAmount,
  increaseItemQuantity,
  decreaseItemQuantity,
  selectBasketItem
} from './basketSlice'

const Products = ({details}) => {
  const {productId, title, image, price, category, rating} = details
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();


  const basketItem = useSelector(state => selectBasketItem(state, productId))
  const displayToggle = loading ? {display: 'none'} : { display: ''}
    
  const addOrUpatedBasketItem = () => {
    basketItem
      ? dispatch(increaseItemQuantity({id: productId}))
      : dispatch(addItem({id: productId, quantity: 1}))
  }

  const product = () => {
      if (rating) {
          return ( 
            <Card raised>
              {loading && <Placeholder><Placeholder.Image square /></Placeholder>}
              <Image 
                className="products-img"
                style={displayToggle} 
                src={image} 
                onLoad={() => setLoading(false)} 
                spaced 
                centered 
                size='small'
                as={Link}
                to={`../Products/${category}/${productId}`}
              />
              <Card.Content>
              <Card.Header>{`${title}`}</Card.Header>
              <Card.Meta>{`$${price}`}</Card.Meta>
              </Card.Content>
              <Card.Content extra textAlign={'center'}>
                <Button as={Link} to={`../Products/${category}/${productId}`}>View Details</Button>
                <Button onClick={() => dispatch(deleteItem({id: productId}))}>Remove Item</Button>
                <Input
                  action={{
                    icon: 'cart',
                  }}
                  actionPosition='left'
                  placeholder='Search...'
                  defaultValue={basketItem.quantity}

                />
                <Button onClick={() => dispatch(increaseItemQuantity({id: productId}))}>
                  <Icon name='cart plus' />
                </Button>
                <Button onClick={() => dispatch(decreaseItemQuantity({id: productId}))}>
                  <Icon name='cart arrow down' />
                </Button>

                <div>Total: ${basketItem.total}</div>
              </Card.Content>
            </Card>
          )
      }
      else {
        return <></>
      }
    }

  return (
    <>
      {product()}
    </>
  )
}

export default Products