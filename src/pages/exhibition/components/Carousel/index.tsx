import TextWithLine from 'common/components/TextWithLine'
import { WhatIsHope } from 'common/constant/ExhibitionContent/WhatIsHope'
import React from 'react'
import { CarouselContainer, Container, NameStyle, Quote } from './styled'
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
      <Quote
        variant="h3"
        mobileVariant={{
          '@md': 'title2',
        }}
      >
        {quote}
      </Quote>

      <TextWithLine
        variant="sub1"
        mobileVariant={{
          '@md': 'caption2',
        }}
        {...NameStyle}
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
