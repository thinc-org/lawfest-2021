import React, { useState } from 'react'
import PageButton from '../PageButton'
import Footer from 'common/components/Footer'
import lawfestLogo from 'assets/images/lawfest_logo.svg'
import {
  AfterStateContainer,
  Container,
  InkContainer,
  LawFestLogoContainer,
  StyledArrow,
  TextContainer,
} from './styled'
import ink from 'assets/images/home_mobile.svg'
import Text from '../Text'
const Mobile = () => {
  const [state, setState] = useState<'before' | 'after'>('before')
  return (
    <Container>
      <InkContainer>
        <img src={ink} style={{ width: '100vw' }} alt="" />
      </InkContainer>
      <LawFestLogoContainer state={state}>
        <img src={lawfestLogo} style={{ height: '274px' }} alt="" />
      </LawFestLogoContainer>
      <TextContainer state={state}>
        <Text state={state} />
      </TextContainer>
      <StyledArrow onClick={() => setState('after')} state={state} />

      <AfterStateContainer state={state}>
        <PageButton />
        <Footer />
      </AfterStateContainer>
    </Container>
  )
}

export default Mobile
