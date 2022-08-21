import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Image, Button, Placeholder } from 'semantic-ui-react'
import './Buttons.scss'

const Banner = ({bannerImg}) => {
    const [bannerLoaded, setBannerLoaded] = useState(false)

    const displayLoaded = ({target}) => {
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
          className='homepage-images'
          style={bannerLoaded ? {visibility: 'visible', display: 'block'} : {visibility: 'hidden', display: 'none'}} 
          wrapped onLoad={displayLoaded} 
        /> 
        { 
            bannerLoaded && 
            <Button 
                as={Link} to={`/Products`} 
                circular 
                size={'massive'} 
                color={'black'}
            >
                View All
            </Button> 
        }
    </>
  )
}

export default Banner