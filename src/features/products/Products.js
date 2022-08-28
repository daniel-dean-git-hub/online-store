import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Image, Placeholder, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addItem, increaseItemQuantity, selectBasketItem } from '../basket/basketSlice'
import './Products.scss'

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
                <Button onClick={addOrUpatedBasketItem}>Add to Cart</Button>
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