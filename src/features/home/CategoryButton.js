import React, { useState } from 'react'
import { Image, Button, Placeholder } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const CategoryButton = ({categoryImg, url, text}) => {
    const [loaded, setLoaded] = useState(false)

    const buttonStyle = {
        position: 'absolute',
        bottom: '1rem',
        transform: 'translate(-50%, -50%)',
        left: '50%'
    }

    return (
    <>
        {
          !loaded && 
          <Placeholder style={{minWidth: '100%'}}>
            <Placeholder.Image  square />
          </Placeholder>
        }
        <Image 
          src={categoryImg} 
          style={loaded ? {visibility: 'visible', display: 'block'} : {visibility: 'hidden', display: 'none'}} 
          wrapped onLoad={() => setLoaded(true)} 
        /> 
        { 
            loaded && 
            <Button 
                style={buttonStyle} 
                as={Link} 
                to={url} 
                circular 
                black 
                inverted 
                size={'huge'} 
            >
                {text}
            </Button> 
        }
    </>
  )
}

export default CategoryButton