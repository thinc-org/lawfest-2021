import React from 'react'
import PageButton from './components/PageButton'
import desktopImage from 'assets/images/home_desktop.svg'
import Footer from 'common/components/Footer'

import { ImageContainer, PageContainer } from './styled'

const Home = () => {
  return (
    <PageContainer>
      <ImageContainer>
        <img alt="" src={desktopImage} style={{ height: '60vh' }} />
      </ImageContainer>
      <PageButton />
      <Footer />
    </PageContainer>
  )
}

export default Home
