import { StyledText } from 'common/components/Typography'
import React from 'react'
import { TitleBackground, TitleContainer } from './styled'
import { TitleProps } from './types'

const Title = ({ children }: TitleProps) => {
  return (
    <TitleBackground>
      <TitleContainer>
        <StyledText mobileVariant="title1" css={{ color: 'white' }}>
          {children}
        </StyledText>
      </TitleContainer>
    </TitleBackground>
  )
}

export default Title
