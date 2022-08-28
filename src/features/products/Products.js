import React, {useState} from 'react'
import { Card, Image, Placeholder, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AddToCartButton from '../basket/AddToCartButton';
import './Products.scss'

const Products = ({details}) => {
  const [loading, setLoading] = useState(true)
  const {productId, title, image, price, category, rating} = details
  const displayToggle = loading ? {display: 'none'} : { display: ''}


  return (
    <>
      {
        rating &&
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
              <AddToCartButton id={productId} />
            </Card.Content>
          </Card>
      }
    </>
  )
}

export default Products