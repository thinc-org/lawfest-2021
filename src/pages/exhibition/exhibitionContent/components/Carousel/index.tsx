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
import { ICarousel } from 'common/constant/ExhibitionContent/types'

const Carousel = (props: ICarousel) => {
  const { contents, onClick, final } = props
  const history = useHistory()
  const { carouselSettings } = useCarousel()

  return (
    <Container style={{ marginTop: '50px' }}>
      <Title />
      {/* Carousel */}
      <CarouselContainer>
        <Slider {...carouselSettings}>
          {contents.map((content, idx) => (
            <CarouselContent key={idx} {...content} />
          ))}
        </Slider>
      </CarouselContainer>

      {/* Next button */}
      <Button
        variant="secondary"
        onClick={final ? () => history.push('/') : onClick}
        css={{ marginTop: '40px', '@sm': { width: '100%' } }}
      >
        {final ? 'กลับหน้าแรก' : 'ไปต่อ'}
      </Button>
    </Container>
  )
}

export default Carousel
