export interface IContent {
  type: 'text' | 'multipleChoice' | 'slider' | 'textArea' | 'carousel'
  data: IText | IMultipleChoice | ITextArea | ISlider | ICarousel
}

export interface IText {
  quote: string
  quoteOwner?: string
  quoteOwnerRef?: string
  translation?: string
}

export interface IMultipleChoice {
  question: string
  choiceList: string[]
}

export interface ITextArea {
  question: string
}

export interface ISlider {
  question: string
}
export interface ICarousel {
  contents: ICarouselContent[]
  final?: boolean
}
export interface ICarouselContent {
  text: string | string[]
  imageUrl?: string
  imagePosition?: 'top' | 'left' | 'center'
  contentRefs?: IReference[]
  imageRefs?: IReference[]
}

export interface IReference {
  text: string
  url: string
}
