import React, {useState} from 'react'
import { Card, Image, Placeholder, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Products.scss'

const Products = ({details}) => {
  const [loading, setLoading] = useState(true)
  const {id, title, image, price, category, rating} = details
  
  const displayToggle = loading ? {display: 'none'} : { display: ''}

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
                to={`../Products/${category}/${id}`}
              />
              <Card.Content>
              <Card.Header>{`${title}`}</Card.Header>
              <Card.Meta>{`$${price}`}</Card.Meta>
              {/* <Card.Description>{description}</Card.Description> */}
              </Card.Content>
              <Card.Content extra textAlign={'center'}>
                <Button as={Link} to={`../Products/${category}/${id}`}>Veiw Details</Button>
                <Button>Add to Cart</Button>
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