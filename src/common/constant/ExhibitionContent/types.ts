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
  title: string
  quote: string
  quoteOwner: string
  content: string[]
  contentRef?: IReference[]
}

export interface IMultipleChoice {
  choiceList: string[]
}

export interface ITextArea {
  question: string
  quote: string
  quoteOwner: string
}

export interface ISlider {
  question: string
  quote: string
  quoteOwner: string
}
export interface ICarousel {
  title:string,
  quote: string
  quoteOwner: string
  contents: ICarouselContent[]
  onClick:any
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
