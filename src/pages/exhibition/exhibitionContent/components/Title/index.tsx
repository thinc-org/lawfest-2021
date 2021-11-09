import TextWithLine from 'common/components/TextWithLine'
import { StyledText } from 'common/components/Typography'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ExhibitionData } from '../../../../../common/constant/ExhibitionContent'
import { IExhibitionParams } from '../../types'
import { NameStyle, Quote, TitleContainer } from './styled'
import { TitleProps } from './types'

const Title = ({ hideQuote }: TitleProps) => {
  const { pageType } = useParams() as IExhibitionParams

  const { title, quote, quoteOwner } = ExhibitionData[pageType]

  return (
    <TitleContainer>
      <StyledText
        variant="h1"
        mobileVariant={{ '@md': 'title1' }}
        css={{ color: '$secondary800' }}
      >
        {title}
      </StyledText>
      {!hideQuote && (
        <>
          <Quote
            variant="h3"
            mobileVariant={{
              '@md': 'title2',
            }}
          >
            {quote}
          </Quote>

          {quoteOwner && (
            <TextWithLine
              variant="sub1"
              mobileVariant={{
                '@md': 'caption2',
              }}
              {...NameStyle}
            >
              {quoteOwner}
            </TextWithLine>
          )}
        </>
      )}
    </TitleContainer>
  )
}

export default Title
