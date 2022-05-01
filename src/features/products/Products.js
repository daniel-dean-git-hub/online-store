import React, {useState} from 'react'
import { Card, Image, Placeholder } from 'semantic-ui-react'

const Products = ({details}) => {
  //console.log(details)
  const [loading, setLoading] = useState(true)
  const {title, image, price, category, rating} = details
  
  const displayToggle = loading ? {display: 'none'} : { display: 'block'}

  const product = () => {
      if (rating) {
          const {rate, count} = rating
          return (   
            <Card>
              {loading && <Placeholder><Placeholder.Image square /></Placeholder>}
              <Image style={displayToggle} src={image} ui={false} onLoad={() => setLoading(false)}/>
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