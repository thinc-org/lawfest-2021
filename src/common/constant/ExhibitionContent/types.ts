export interface ICarousel {
  quote: string
  name: string
  contents: ICarouselContent[]
}

export interface ICarouselContent {
  text: string
  imageUrl?: string
  imagePosition?: 'top' | 'left'
  contentRefs?: IReference[]
  imageRefs?: IReference[]
}

export interface IReference {
  text: string
  url: string
}
