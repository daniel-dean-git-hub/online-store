import React from 'react'
// import { Link } from 'react-router-dom'

import { Grid } from 'semantic-ui-react'

import Banner from './Banner'
import CategoryButton from './CategoryButton'

import bannerImg from '../../assets/banner.jpg'
import mens from '../../assets/mens.jpg'
import womens from '../../assets/womens.jpg'
import jewelery from '../../assets/jewelery.jpg'
import electronics from '../../assets/electronics.jpg'

const Home = () => {
  return (
    <Grid stretched centered>
      <Grid.Row>
        <Banner bannerImg={bannerImg} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <CategoryButton categoryImg={womens} url={`/Products/women's%20clothing`} text={`Women's`} />
        </Grid.Column>
        <Grid.Column width={8}>
          <CategoryButton categoryImg={mens} url={`/Products/men's%20clothing`} text={`Men's`} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <CategoryButton categoryImg={jewelery} url={`/Products/jewelery`} text={`Jewelery`} />
        </Grid.Column>
        <Grid.Column width={8}>
          <CategoryButton categoryImg={electronics} url={`/Products/electronics`} text={`Electronics`}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Home