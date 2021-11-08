import TextWithLine from 'common/components/TextWithLine'
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
import { ICarousel } from 'common/constant/ExhibitionContent/types'

const Carousel = (props: ICarousel) => {
  const { title, quote, quoteOwner, contents, onClick, final } = props
  const history = useHistory()
  const { carouselSettings } = useCarousel()

  return (
    <Container style={{ marginTop: '50px' }}>
      <Title>{title}</Title>
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
      {/* Carousel */}
      <CarouselContainer>
        <Slider {...carouselSettings}>
          {contents.map((content, idx) => (
            <CarouselContent key={idx} {...content} />
          ))}
        </Slider>
      </CarouselContainer>

      {/* Next button */}
      {!final && (
        <Button
          variant="secondary"
          onClick={onClick}
          css={{ marginTop: '40px' }}
        >
          ไปต่อ
        </Button>
      )}
      {final && (
        <Button
          variant="secondary"
          onClick={() => history.push('/')}
          css={{ marginTop: '40px' }}
        >
          กลับหน้าแรก
        </Button>
      )}
    </Container>
  )
}

export default Carousel
