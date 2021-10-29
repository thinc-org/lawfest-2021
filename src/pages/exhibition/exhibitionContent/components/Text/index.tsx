import TextWithLine from 'common/components/TextWithLine'
import { StyledText } from 'common/components/Typography'
import React from 'react'
import { ContentContainer, QuoteContainer } from './styled'
import { TextProps } from './types'

const Text = (props: TextProps) => {
  const { quote, quoteOwner, quoteOwnerRef,translation, onClick } = props
  return (
    <ContentContainer onClick={onClick}>
      <StyledText
        mobileVariant={{ '@md': 'title1' }}
        variant="h1"
        css={{ textAlign: 'center' }}
      >
        {quote}
      </StyledText>
      {quoteOwner && (
        <QuoteContainer>
          <StyledText mobileVariant={{ '@md': 'subhead' }} variant="sub1">
            {quoteOwner}
          </StyledText>
          <StyledText
            mobileVariant={{ '@md': 'caption2' }}
            variant="caption"
            css={{ marginTop: '8px' }}
          >
            {quoteOwnerRef}
          </StyledText>
        </QuoteContainer>
      )}
      
      {translation && (
        <StyledText
          mobileVariant={{ '@md': 'title2' }}
          variant="h2"
          css={{ textAlign: 'center' }}
        >
          {translation}
        </StyledText>
      )}

      <TextWithLine
        mobileVariant="headline"
        textColor="$black600"
        css={{ marginTop: '40px' }}
      >
        แตะเพื่อไปต่อ
      </TextWithLine>
    </ContentContainer>
  )
}

export default Text
