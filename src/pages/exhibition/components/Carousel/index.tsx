import TextWithLine from 'common/components/TextWithLine'
import { StyledText } from 'common/components/Typography'
import { WhatIsHope } from 'common/constant/ExhibitionContent/WhatIsHope'
import React, { useState } from 'react'
import { CarouselContainer, Container } from './styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarouselContent from './components/CarouselContent'
import { NextArrow } from './components/NextArrow'
import { PrevArrow } from './components/PrevArrow'
import Button from 'common/components/Button'
import { useHistory } from 'react-router'

const Carousel = () => {
  const { quote, name, contents } = WhatIsHope
  const [currentSlide, setSlide] = useState(0)
  const history = useHistory()

  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current: number) => {
      setSlide(current)
    },
  }

  return (
    <Container>
      <StyledText mobileVariant="title2" css={{ color: '$primary800' }}>
        {quote}
      </StyledText>

      <TextWithLine
        mobileVariant="caption2"
        leftLineColor="linear-gradient(270deg, #FBC55C 0%, #505B89 100%)"
        rightLineColor="linear-gradient(270deg, #505B89 0%, #FBC55C 100%)"
        css={{ color: '#505B89' }}
      >
        {name}
      </TextWithLine>
      <CarouselContainer>
        <Slider {...carouselSettings}>
          {contents.map((content, idx) => (
            <CarouselContent key={idx} {...content} />
          ))}
        </Slider>
      </CarouselContainer>
      {currentSlide === contents.length - 1 && (
        <Button
          variant="secondary"
          onClick={() => {
            history.push('/')
          }}
          css={{ marginTop: '40px' }}
        >
          กลับหน้าแรก
        </Button>
      )}
    </Container>
  )
}

export default Carousel
