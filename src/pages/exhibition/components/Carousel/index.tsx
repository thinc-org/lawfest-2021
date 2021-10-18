import TextWithLine from 'common/components/TextWithLine'
import { StyledText } from 'common/components/Typography'
import { WhatIsHope } from 'common/constant/ExhibitionContent/WhatIsHope'
import React from 'react'
import { Container } from './styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const { quote, name, contents } = WhatIsHope
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Container>
      <StyledText mobileVariant="title2">{quote}</StyledText>
      <TextWithLine mobileVariant="caption2">{name}</TextWithLine>
      <div style={{ display: 'block', maxWidth: '60vw', marginTop: '23px' }}>
        <Slider {...settings}>
          {contents.map((content, idx) => (
            <div key={idx}>{content.text}</div>
          ))}
        </Slider>
      </div>
    </Container>
  )
}

export default Carousel
