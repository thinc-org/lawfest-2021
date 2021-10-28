import 'App.css'
import home from 'assets/pic/home.png'
import React, { useCallback, useState } from 'react'
import Footer from 'common/components/Footer'
import Multiplechoice from './components/Multiplechoice'
import SilderPage from './components/SliderPage'
import InputPage from './components/InputPage'
import Text from './components/Text'
import Div100vh from 'react-div-100vh'
import { Link } from 'react-router-dom'
import { WhatIsHope } from 'common/constant/ExhibitionContent/WhatIsHope'
import {
  ICarousel,
  IMultipleChoice,
  IText,
  ITextArea,
} from 'common/constant/ExhibitionContent/types'
import Carousel from './components/Carousel'

const Exhibition = () => {
  // static data = {
  //   0: { type: 'menu' },
  //   1: { type: 'text', text: 'What is Hope?', next: 4 },
  //   2: { type: 'text', text: 'Hope Ignited', next: 5 },
  //   3: { type: 'text', text: 'Hopeless but Hoping', next: 6 },
  //   4: {
  //     type: 'text',
  //     text: 'Where there is hope, there is life',
  //     quoteOwner: 'Anne Frank',
  //     quoteOwnerRef: 'JEWISH’S DIARIST DURING WW2',
  //     next: 7,
  //   },
  //   5: {
  //     type: 'text',
  //     text: 'If justice takes place, there shall be hope.',
  //     quoteOwner: 'Alberto Manguel',
  //     quoteOwnerRef: 'CANADIAN NOVELIST',
  //     next: 8,
  //   },
  //   6: {
  //     type: 'text',
  //     text: '“Once you choose hope, anything is possible.”',
  //     quoteOwner: 'Christopher Reeve',
  //     quoteOwnerRef: 'AMERICAN ACTOR, DIRECTOR, AND ACTIVIST',
  //     next: 9,
  //   },
  //   7: {
  //     type: 'multipleChoice',
  //     next: 11,
  //     header: 'What is Hope?',
  //     choiceList: ['ตัวเอง', 'เพื่อน', 'จะ F ได้ไง ก็ถอนกันหมด'],
  //   },
  //   8: {
  //     type: 'others',
  //     element: <SilderPage />,
  //     next: 8,
  //   },
  //   9: {
  //     type: 'textArea',
  //     header: 'Hopeless but Hoping',
  //     str: 'บอกหน่อยสิ เทอมนี้เธอจะหนี F ยังไง',
  //     next: 10,
  //   },
  //   10: {
  //     type: 'textArea',
  //     str: 'มาสาธยายวิธีรอดหน่อยสิ',
  //     next: 10,
  //   },
  // }
  const [page, setPage] = useState(0)
  const changePage = useCallback(() => {
    setPage((state) => state + 1)
  }, [])

  const data = WhatIsHope
  const title = 'What is Hope'
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
      content = <SilderPage />
      break
    case 'carousel':
      content = <Carousel {...(contentData as ICarousel)} />
  }
  // var content
  // const data: any = Exhibition.data[this.state.status]
  // if (data['type'] === 'menu')
  //   content = <Selectors onClick={(i: any) => this.setState({ status: i })} />
  // else if (data['type'] === 'text') {
  //   content = (
  //     <Text
  //       {...data}
  //       onClick={() => this.setState({ status: data['next'] })}
  //     />
  //   )
  // } else if (data['type'] === 'others') {
  //   //console.log(this.state.status)
  //   content = data['element']
  // } else if (data['type'] === 'multipleChoice') {
  //   content = (
  //     <Multiplechoice
  //       onClick={() => this.setState({ status: data['next'] })}
  //       choiceList={data['choiceList']}
  //       header={data['header']}
  //     />
  //   )
  // } else if (data['type'] === 'textArea') {
  //   content = (
  //     <InputPage
  //       header={data['header']}
  //       str={data['str']}
  //       onClick={() => this.setState({ status: data['next'] })}
  //     />
  //   )
  // } else if (data['type'] === 'imagePage') {
  //   content = (
  //     <ImagePage
  //       onClick={() => this.setState({ status: data['next'] })}
  //       header={data['header']}
  //       subheader={data['subheader']}
  //       name={data['name']}
  //       imgURL={data['imgURL']}
  //       content={data['content']}
  //       imgRef={data['imgRef']}
  //       dataRef={data['dataRef']}
  //     />
  //   )
  // }
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
