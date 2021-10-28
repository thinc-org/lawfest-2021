import React, { useState } from 'react'
import { NextArrow } from '../components/NextArrow'
import { PrevArrow } from '../components/PrevArrow'

const useCarousel = () => {
  const [currentSlide, setSlide] = useState(0)

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

  return { carouselSettings, currentSlide }
}

export default useCarousel
