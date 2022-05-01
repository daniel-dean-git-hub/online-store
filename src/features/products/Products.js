import React, {useState} from 'react'
import { Card, Image, Placeholder, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Products = ({details}) => {
  //console.log(details)
  const [loading, setLoading] = useState(true)
  const {id, title, image, price, category, rating} = details
  
  const displayToggle = loading ? {display: 'none'} : { display: ''}

  const product = () => {
      if (rating) {
          return ( 
            <Card raised>
              {loading && <Placeholder><Placeholder.Image square /></Placeholder>}
              <Image 
                style={displayToggle} 
                src={image} 
                onLoad={() => setLoading(false)} 
                spaced 
                centered 
                size='small'
                as={Link}
                to={`/item/${id}`}
              />
              <Card.Content>
              <Card.Header>{`${title} - $${price}`}</Card.Header>
              <Card.Meta>{category}</Card.Meta>
              {/* <Card.Description>{description}</Card.Description> */}
              </Card.Content>
              <Card.Content extra>
                <Button as={Link} to={`/item/${id}`}>Veiw Details</Button>
                <Button>Add to Card</Button>
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