import React from 'react'
import PageButton from '../PageButton'
import Footer from 'common/components/Footer'

import { Image, PageContainer } from './styled'

const Desktop = () => {
  return (
    <PageContainer>
      <Image />
      <PageButton />
      <Footer />
    </PageContainer>
  )
}

export default Desktop
