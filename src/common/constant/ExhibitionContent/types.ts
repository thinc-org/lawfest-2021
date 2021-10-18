export interface ICarousel {
  quote: string
  name: string
  contents: ICarouselContent[]
}

export interface ICarouselContent {
  type: 'text' | 'imageCenter' | 'imageLeft'
  text: string
}
