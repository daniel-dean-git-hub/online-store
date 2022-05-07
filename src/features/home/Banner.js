import React, { useState } from 'react'
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
          style={bannerLoaded ? {visibility: 'visible', display: 'block'} : {visibility: 'hidden', display: 'none'}} 
          wrapped onLoad={displayLoaded} 
        /> 
        { 
            bannerLoaded && 
            <Button 
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