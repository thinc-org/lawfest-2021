import 'App.css'
import home from 'assets/pic/home.png'
import React, { useCallback, useState } from 'react'
import Footer from 'common/components/Footer'
import Multiplechoice from './components/Multiplechoice'
import SilderPage from './components/SliderPage'
import InputPage from './components/InputPage'
import Text from './components/Text'
import Div100vh from 'react-div-100vh'
import { Link, Redirect, useParams } from 'react-router-dom'
import { WhatIsHope } from 'common/constant/ExhibitionContent/WhatIsHope'
import {
  ICarousel,
  IMultipleChoice,
  ISlider,
  IText,
  ITextArea,
} from 'common/constant/ExhibitionContent/types'
import Carousel from './components/Carousel'
import { HopeIgnited } from 'common/constant/ExhibitionContent/HopeIgnited'
import { HopelessButHoping } from 'common/constant/ExhibitionContent/HopelessButHoping'

const Exhibition = () => {
  const [page, setPage] = useState(0)
  const changePage = useCallback(() => {
    setPage((state) => state + 1)
  }, [])

  type IExhibitionPage = 'what-is-hope' | 'hope-ignited' | 'hopeless-but-hoping'
  const { pageType } = useParams() as { pageType: IExhibitionPage }
  const ExhibitionData = {
    'what-is-hope': { data: WhatIsHope, text: 'What is Hope' },
    'hope-ignited': { data: HopeIgnited, text: 'Hope ignited' },
    'hopeless-but-hoping': {
      data: HopelessButHoping,
      text: 'Hopeless but Hoping',
    },
  }

  const data = ExhibitionData[pageType].data
  const title = ExhibitionData[pageType].text
  if (data === null) {
    return <Redirect to="/exhibition" />
  }

  let content = null
  const contentData = data[page].data

  switch (data[page].type) {
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
      <div style={{ flexGrow: 1, marginBottom: '20px' }}>{content}</div>
      <Footer />
    </Div100vh>
  )
}
export default Exhibition
