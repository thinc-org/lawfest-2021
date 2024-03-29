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

const Carousel = (props: ICarousel & { onClick: () => void }) => {
  const { contents, onClick, final } = props
  const history = useHistory()
  const { carouselSettings } = useCarousel()

  return (
    <Container>
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
        onClick={final ? () => history.push('/exhibition') : onClick}
        css={{ marginTop: '40px', width: '100%' }}
      >
        {final ? 'กลับสู่นิทรรศการ' : 'ไปต่อ'}
      </Button>
    </Container>
  )
}

export default Carousel
