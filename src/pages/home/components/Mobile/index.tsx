import React, { useState } from 'react'
import PageButton from '../PageButton'
import Footer from 'common/components/Footer'
import lawfestLogo from 'assets/images/lawfest_logo.svg'
import {
  AfterStateContainer,
  InkContainer,
  LawFestLogo,
  Container,
  StartButton,
} from './styled'
import ink from 'assets/images/home_mobile.svg'
import Text from './components/Text'
import TextWithLine from 'common/components/TextWithLine'

const Mobile = () => {
  const [state, setState] = useState<'before' | 'after'>('before')
  return (
    <Container
      onClick={() => {
        setState('after')
      }}
    >
      {/* Background */}
      <InkContainer>
        <img src={ink} style={{ width: '100vw', height: '100%' }} alt="" />
      </InkContainer>

      {/* Before */}
      <LawFestLogo state={state} src={lawfestLogo} alt="" />
      <Text state={state} />

      <StartButton state={state}>
        <TextWithLine
          css={{
            color: '$primary700',
          }}
          mobileVariant="subhead"
        >
          แตะเพื่อเริ่มออกเดินทาง
        </TextWithLine>
      </StartButton>

      {/* After */}
      <AfterStateContainer state={state}>
        <PageButton />
        <Footer />
      </AfterStateContainer>
    </Container>
  )
}

export default Mobile
