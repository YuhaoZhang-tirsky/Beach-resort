import React from 'react'

import Hero from '../components/Hero'
import Home from './Home'
import Banner from '../components/Banner'

import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          Return to home page
        </Link>
      </Banner>
    </Hero>
  )
}

export default Error
