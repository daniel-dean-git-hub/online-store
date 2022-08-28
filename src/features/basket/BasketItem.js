import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Image, Placeholder, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {   
  deleteItem, 
  updateItemQuantityByAmount,
  increaseItemQuantity,
  decreaseItemQuantity,
  selectBasketItem
} from './basketSlice'
import './BasketItem.scss'

const Products = ({details}) => {
  const {productId, title, image, price, category, rating} = details
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const basketItem = useSelector(state => selectBasketItem(state, productId))
  const {quantity, total} = basketItem;

  const displayToggle = loading ? {display: 'none'} : { display: ''}

  const quantityUpdate = (total) => {
    if (isNaN(total)) total = 0
    if (total > 100) total = 100
    dispatch(updateItemQuantityByAmount({ id: productId, quantity: total}))
  }

  const product = () => {
      if (rating) {
          return ( 
            <Card raised centered={true}>
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
                {
                  quantity <= 0 
                    ? <Button onClick={() => dispatch(decreaseItemQuantity({id: productId}))} disabled>
                        <Icon name='cart arrow down' />
                      </Button>
                    : <Button onClick={() => dispatch(decreaseItemQuantity({id: productId}))}>
                        <Icon name='cart arrow down' />
                      </Button>
                }
                <input className='total' value={quantity} onChange={(e) => quantityUpdate(parseInt(e.target.value))}/>
                {
                  quantity >= 100 
                    ? <Button onClick={() => dispatch(increaseItemQuantity({id: productId}))} disabled>
                        <Icon name='cart plus' />
                      </Button>
                    : <Button onClick={() => dispatch(increaseItemQuantity({id: productId}))}>
                        <Icon name='cart plus' />
                      </Button>
                }
                <div>Total: ${total.toFixed(2)}</div>
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