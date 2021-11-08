import 'App.css'
import React, { useCallback, useState } from 'react'
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
import ParagraphPage from './components/Paragraph'
import { FadeContainer, FadeOut } from './styled'

const Exhibition = () => {
  const { pageType } = useParams() as IExhibitionParams
  const { type, contentData, changePage } = useExhibitionData(pageType)
  const [isFadeIn, setFadeIn] = useState(true)

  const triggerChangePage = useCallback(() => {
    setFadeIn(false)
  }, [])

  if (!type) {
    return <Redirect to="/exhibition" />
  }

  let content = null

  switch (type) {
    case 'text':
      content = <Text {...(contentData as IText)} onClick={triggerChangePage} />
      break
    case 'paragraph':
      content = (
        <ParagraphPage
          {...(contentData as IParagraph)}
          onClick={triggerChangePage}
        />
      )
      break
    case 'multipleChoice':
      content = (
        <Multiplechoice
          {...(contentData as IMultipleChoice)}
          onClick={triggerChangePage}
        />
      )
      break
    case 'textArea':
      content = (
        <InputPage
          {...(contentData as ITextArea)}
          onClick={triggerChangePage}
        />
      )
      break
    case 'slider':
      content = (
        <SilderPage {...(contentData as ISlider)} onClick={triggerChangePage} />
      )
      break
    case 'carousel':
      content = (
        <Carousel {...(contentData as ICarousel)} onClick={triggerChangePage} />
      )
  }

  return (
    <ExhibitionLayout>
      <FadeContainer
        fadeIn={isFadeIn}
        onAnimationEnd={(ev) => {
          if (ev.animationName === FadeOut.name) {
            setFadeIn(true)
            changePage()
          }
        }}
      >
        {content}
      </FadeContainer>
    </ExhibitionLayout>
  )
}
export default Exhibition
