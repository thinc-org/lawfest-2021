import 'App.css'
import home from 'assets/pic/home.png'
import React from 'react'
import Footer from 'common/components/Footer'
import Multiplechoice from './components/Multiplechoice'
import SilderPage from './components/SliderPage'
import InputPage from './components/InputPage'
import Text from './components/Text'
import Div100vh from 'react-div-100vh'
import { Link, Redirect, useParams } from 'react-router-dom'
import {
  ICarousel,
  IMultipleChoice,
  ISlider,
  IText,
  ITextArea,
} from 'common/constant/ExhibitionContent/types'
import Carousel from './components/Carousel'
import useExhibitionData from './hooks/useExhibitionData'
import { IExhibitionParams } from './types'

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

  return (
    <Div100vh
      style={{
        backgroundColor: '#f1e1c7',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to="/">
        <img
          src={home}
          width="30px"
          alt="home-icon"
          style={{
            marginTop: '15px',
            marginLeft: '15px',
            position: 'absolute',
          }}
        />
      </Link>
      <div style={{ flexGrow: 1 }}>{content}</div>
      <Footer />
    </Div100vh>
  )
}
export default Exhibition
