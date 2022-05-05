import React, { useState } from 'react'
import { Image, Button, Placeholder } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Banner = ({bannerImg}) => {
    const [bannerLoaded, setBannerLoaded] = useState(false)

    const displayLoaded = ({target}) => {
      console.log(target)
      target.style = {visibility: 'visible'}
      setBannerLoaded(true)
    }

    return (
    <>
        {
          !bannerLoaded && 
          <Placeholder style={{minWidth: '100%'}}>
            <Placeholder.Image  square />
          </Placeholder>
        }
        <Image 
          src={bannerImg} 
          style={bannerLoaded ? {visibility: 'visible', display: 'block'} : {visibility: 'hidden', display: 'none'}} 
          wrapped onLoad={displayLoaded} 
        /> 
        { 
            bannerLoaded && 
            <Button 
                style={{position: 'absolute', bottom: '3rem'}} 
                as={Link} 
                to={`/Products`} 
                circular 
                black 
                inverted 
                size={'huge'} 
            >
                ENTER
            </Button> 
        }
    </>
  )
}

export default Banner