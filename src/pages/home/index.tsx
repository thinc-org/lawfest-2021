import React from 'react'
import Desktop from './components/Desktop'
import { useMediaQuery } from 'react-responsive'

const Home = () => {
    
  const isMobile = useMediaQuery({ query: '(max-width: 496px)' })
  if(!isMobile)return <Desktop/>
  return <></>
}

export default Home