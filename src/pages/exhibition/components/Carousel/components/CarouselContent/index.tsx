import { StyledText } from 'common/components/Typography'
import { ICarouselContent } from 'common/constant/ExhibitionContent/types'
import React from 'react'
import { Container } from './styled'

const CarouselContent = (props: ICarouselContent) => {
  const { text, imageUrl, imagePosition } = props
  return (
    <Container imagePosition={imagePosition}>
      {imageUrl && (
        <img
          src={`images/exhibition/${imageUrl}`}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      )}
      <div>
        {text.split('\n').map((line, idx) => (
          <>
            <StyledText mobileVariant="body" key={idx}>
              {line}
            </StyledText>
            <br />
          </>
        ))}
      </div>
    </Container>
  )
}

export default CarouselContent
