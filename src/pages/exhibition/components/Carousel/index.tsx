import TextWithLine from 'common/components/TextWithLine'
import { StyledText } from 'common/components/Typography'
import { WhatIsHope } from 'common/constant/ExhibitionContent/WhatIsHope'
import React from 'react'
import { CarouselContainer, Container } from './styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarouselContent from './components/CarouselContent'
import Button from 'common/components/Button'
import { useHistory } from 'react-router'
import Title from '../Title'
import useCarousel from './hooks/useCarousel'

const Carousel = () => {
  const { quote, name, contents } = WhatIsHope
  const history = useHistory()
  const { carouselSettings, currentSlide } = useCarousel()

  return (
    <Container>
      <Title>What is Hope</Title>
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

      {/* Carousel */}
      <CarouselContainer>
        <Slider {...carouselSettings}>
          {contents.map((content, idx) => (
            <CarouselContent key={idx} {...content} />
          ))}
        </Slider>
      </CarouselContainer>

      {/* Back to home button */}
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
