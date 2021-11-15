import React from 'react'
import { NextArrow } from '../components/NextArrow'
import { PrevArrow } from '../components/PrevArrow'

const useCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  }

  return { carouselSettings }
}

export default useCarousel
