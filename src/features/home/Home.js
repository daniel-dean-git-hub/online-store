import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Link to={'/Products'}>View Products</Link>
  )
}

export default Home