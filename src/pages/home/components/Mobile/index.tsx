import React, { useState } from 'react'
import PageButton from '../PageButton'
import Footer from 'common/components/Footer'
import lawfestLogo from 'assets/images/lawfest_logo.svg'
import {
  AfterStateContainer,
  InkContainer,
  LawFestLogoContainer,
  Container,
  StartButton,
} from './styled'
import ink from 'assets/images/home_mobile.svg'
import Text from '../Text'
import TextWithLine from 'common/components/TextWithLine'

const Mobile = () => {
  const [state, setState] = useState<'before' | 'after'>('before')
  return (
    <Container>
      <InkContainer>
        <img src={ink} style={{ width: '100vw' }} alt="" />
      </InkContainer>
      <LawFestLogoContainer state={state} src={lawfestLogo} alt="" />

      <Text state={state} />

      <StartButton
        onClick={() => {
          setState('after')
        }}
        state={state}
      >
        <TextWithLine
          css={{
            color: '$primary700',
          }}
          mobileVariant="subhead"
        >
          แตะเพื่อเริ่มออกเดินทาง
        </TextWithLine>
      </StartButton>
      <AfterStateContainer state={state}>
        <PageButton />
        <Footer />
      </AfterStateContainer>
    </Container>
  )
}

export default Mobile
