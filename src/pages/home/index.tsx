import React from 'react'
import Desktop from './components/Desktop'
import { useMediaQuery } from 'react-responsive'
import Mobile from './components/Mobile'

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 496px)' })
  if (!isMobile) return <Desktop />
  return <Mobile />
}

export default Home
