import React, { useState } from 'react'
import { Image, Button, Placeholder } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Buttons.scss'

const CategoryButton = ({categoryImg, url, text}) => {  
    const [loaded, setLoaded] = useState(false)

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
                as={Link} 
                to={url} 
                circular
                size={'huge'} 
                color={'black'}
            >
                {text}
            </Button> 
        }
    </>
  )
}

export default CategoryButton