import { StyledText } from 'common/components/Typography'
import { ICarouselContent } from 'common/constant/ExhibitionContent/types'
import React from 'react'
import { Refs } from './components/Refs'
import { Container, StyledImage } from './styled'

const CarouselContent = (props: ICarouselContent) => {
  const { text, imageUrl, imagePosition, contentRefs, imageRefs } = props
  console.log(`images/exhibition/${imageUrl}`)
  return (
    <Container imagePosition={imagePosition}>
      {imageUrl && (
        <StyledImage
          src={`images/exhibition/${imageUrl}`}
          alt=""
          imagePosition={imagePosition}
        />
      )}
      <div>
        {text.split('\n').map((line, idx) => (
          <div key={idx}>
            <StyledText variant="body1" mobileVariant={{ '@md': 'body' }}>
              {line}
            </StyledText>
            <br />
          </div>
        ))}
        {imageRefs && <Refs title="ภาพ : " refs={imageRefs} />}
        {contentRefs && <Refs title="อ้างอิง : " refs={contentRefs} />}
      </div>
    </Container>
  )
}

export default CarouselContent
