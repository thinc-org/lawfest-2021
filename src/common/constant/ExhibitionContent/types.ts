export interface IContent {
  type: 'text' | 'paragraph' | 'multipleChoice' | 'slider' | 'textArea' | 'carousel'
  data: IText | IParagraph | IMultipleChoice | ITextArea | ISlider | ICarousel
}

export interface IText {
  quote: string
  quoteOwner?: string
  quoteOwnerRef?: string
  translation?: string
}

export interface IParagraph {
  content: string[]
  contentRef?: IReference[]
}

export interface IMultipleChoice {
  choiceList: string[]
}

export interface ITextArea {
  question: string
}

export interface ISlider {
  question: string
  quote: string
  quoteOwner: string
}
export interface ICarousel {
  quote: string
  quoteOwner: string
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
