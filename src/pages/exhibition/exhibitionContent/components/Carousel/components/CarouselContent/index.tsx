import { ICarouselContent } from 'common/constant/ExhibitionContent/types'
import React from 'react'
import { Refs } from './components/Refs'
import useCarouselText from './hooks/useCarouselText'
import { CarouselText, Container, StyledImage } from './styled'

const CarouselContent = (props: ICarouselContent) => {
  const { imageUrl, imagePosition, contentRefs, imageRefs } = props
  const text = useCarouselText(props.text)

  return (
    <Container imagePosition={imagePosition}>
      {imageUrl && (
        <StyledImage
          src={`../images/exhibition/${imageUrl}`}
          alt=""
          imagePosition={imagePosition}
        />
      )}
      {props.text !== '' && (
        <div style={{ flexGrow: 1 }}>
          {text.map(({ text, bold, center }, idx) => (
            <React.Fragment key={idx}>
              <CarouselText
                variant="body1"
                mobileVariant={{ '@md': 'body' }}
                center={center}
                bold={bold}
              >
                {!center && <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
                {text}
              </CarouselText>
              <br />
            </React.Fragment>
          ))}
          {imageRefs && <Refs title="ภาพ : " refs={imageRefs} />}
          {contentRefs && <Refs title="อ้างอิง : " refs={contentRefs} />}
        </div>
      )}
    </Container>
  )
}

export default CarouselContent
