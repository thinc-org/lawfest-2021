import 'App.css'
import React from 'react'
import Multiplechoice from './components/Multiplechoice'
import SilderPage from './components/SliderPage'
import InputPage from './components/InputPage'
import Text from './components/Text'
import { Redirect, useParams } from 'react-router-dom'
import {
  ICarousel,
  IMultipleChoice,
  IParagraph,
  ISlider,
  IText,
  ITextArea,
} from 'common/constant/ExhibitionContent/types'
import Carousel from './components/Carousel'
import useExhibitionData from './hooks/useExhibitionData'
import { IExhibitionParams } from './types'
import ExhibitionLayout from '../components/ExhibitionLayout'
import ParagraphPage from './components/ParagraphPage'

const Exhibition = () => {
  const { pageType } = useParams() as IExhibitionParams
  const { type, contentData, changePage, title } = useExhibitionData(pageType)

  if (!type || !title) {
    return <Redirect to="/exhibition" />
  }

  let content = null

  switch (type) {
    case 'text':
      content = <Text {...(contentData as IText)} onClick={changePage} />
      break
    case 'paragraph':
      content = <ParagraphPage {...(contentData as IParagraph)} title={title} onClick = {changePage}/>
      break
    case 'multipleChoice':
      content = (
        <Multiplechoice
          {...(contentData as IMultipleChoice)}
          onClick={changePage}
          title={title}
        />
      )
      break
    case 'textArea':
      content = (
        <InputPage
          {...(contentData as ITextArea)}
          title={title}
          onClick={changePage}
        />
      )
      break
    case 'slider':
      content = (
        <SilderPage
          {...(contentData as ISlider)}
          title={title}
          onClick={changePage}
        />
      )
      break
    case 'carousel':
      content = <Carousel {...(contentData as ICarousel)} />
  }

  return <ExhibitionLayout>{content}</ExhibitionLayout>
}
export default Exhibition
