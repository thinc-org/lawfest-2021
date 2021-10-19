import { StyledText } from 'common/components/Typography'
import { ICarouselContent } from 'common/constant/ExhibitionContent/types'
import React from 'react'
import { Refs } from './components/Refs'
import { Container } from './styled'

const CarouselContent = (props: ICarouselContent) => {
  const { text, imageUrl, imagePosition, contentRefs, imageRefs } = props
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
        {contentRefs && <Refs title="เนื้อหา: " refs={contentRefs} />}
        {imageRefs && <Refs title="ภาพ: " refs={imageRefs} />}
      </div>
    </Container>
  )
}

export default CarouselContent
