import { StyledText } from 'common/components/Typography'
import { ICarouselContent } from 'common/constant/ExhibitionContent/types'
import React from 'react'
import { Refs } from './components/Refs'
import { Container, StyledImage } from './styled'

const CarouselContent = (props: ICarouselContent) => {
  const { imageUrl, imagePosition, contentRefs, imageRefs } = props
  const text = Array.isArray(props.text) ? props.text : props.text.split('\n')

  return (
    <Container imagePosition={imagePosition}>
      {imageUrl && (
        <StyledImage
          src={`../images/exhibition/${imageUrl}`}
          alt=""
          imagePosition={imagePosition}
        />
      )}
      {text[0] !== '' && (
        <div style={{ flexGrow: 1 }}>
          {text.map((line, idx) => (
            <div key={idx}>
              <StyledText variant="body1" mobileVariant={{ '@md': 'body' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;{line}
              </StyledText>
              <br />
            </div>
          ))}
          {imageRefs && <Refs title="ภาพ : " refs={imageRefs} />}
          {contentRefs && <Refs title="อ้างอิง : " refs={contentRefs} />}
        </div>
      )}
    </Container>
  )
}

export default CarouselContent
