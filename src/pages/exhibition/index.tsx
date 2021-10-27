import 'App.css'
import Selectors from './components/Selectors'
import home from 'assets/pic/home.png'
import React from 'react'
import Footer from 'common/components/Footer'
import Multiplechoice from './components/Multiplechoice'
import SilderPage from './components/SliderPage'
import InputPage from './components/InputPage'
import ImagePage from './components/ImagePage'
import Text from './components/Text'
import Div100vh from 'react-div-100vh'
import { Link } from 'react-router-dom'

class Exhibition extends React.Component<{}, { status: 0 }> {
  static data = {
    0: { type: 'menu' },
    1: { type: 'text', text: 'What is Hope?', next: 4 },
    2: { type: 'text', text: 'Hope Ignited', next: 5 },
    3: { type: 'text', text: 'Hopeless but Hoping', next: 6 },
    4: {
      type: 'text',
      text: 'Where there is hope, there is life',
      quoteOwner: 'Anne Frank',
      quoteOwnerRef: 'JEWISH’S DIARIST DURING WW2',
      next: 7,
    },
    5: {
      type: 'text',
      text: 'If justice takes place, there shall be hope.',
      quoteOwner: 'Alberto Manguel',
      quoteOwnerRef: 'CANADIAN NOVELIST',
      next: 8,
    },
    6: {
      type: 'text',
      text: '“Once you choose hope, anything is possible.”',
      quoteOwner: 'Christopher Reeve',
      quoteOwnerRef: 'AMERICAN ACTOR, DIRECTOR, AND ACTIVIST',
      next: 9,
    },
    7: {
      type: 'multipleChoice',
      next: 11,
      header: 'What is Hope?',
      choiceList: ['ตัวเอง', 'เพื่อน', 'จะ F ได้ไง ก็ถอนกันหมด'],
    },
    8: {
      type: 'others',
      element: <SilderPage />,
      next: 8,
    },
    9: {
      type: 'textArea',
      header: 'Hopeless but Hoping',
      str: 'บอกหน่อยสิ เทอมนี้เธอจะหนี F ยังไง',
      next: 10,
    },
    10: {
      type: 'textArea',
      str: 'มาสาธยายวิธีรอดหน่อยสิ',
      next: 10,
    },
    11: {
      type: 'imagePage',
      header: 'What is Hope?',
      subheader: 'Where there is hope, there is life',
      name: 'ANNE FRANK',
      imgURL: '/images/01.jpg',
      content:
        'ก็แหม...เล่นไปลงวิชายากๆ เรียนไปได้ 2 วัน จาก Online กายก็ไป On-bed เฉยเลย จะไม่ F ได้อย่างไร แต่อย่าได้กังวลไป ถ้าถอนทันก็สิ้นเรื่อง',
      imgRef: 'placeholder',
      dataRef: 'placeholder',
      next: 11,
    },
  }

  constructor(props: any) {
    super(props)
    this.state = { status: 0 }
  }
  render() {
    var content
    const data: any = Exhibition.data[this.state.status]
    if (data['type'] === 'menu')
      content = <Selectors onClick={(i: any) => this.setState({ status: i })} />
    else if (data['type'] === 'text') {
      content = (
        <Text
          {...data}
          onClick={() => this.setState({ status: data['next'] })}
        />
      )
    } else if (data['type'] === 'others') {
      //console.log(this.state.status)
      content = data['element']
    } else if (data['type'] === 'multipleChoice') {
      content = (
        <Multiplechoice
          onClick={() => this.setState({ status: data['next'] })}
          choiceList={data['choiceList']}
          header={data['header']}
        />
      )
    } else if (data['type'] === 'textArea') {
      content = (
        <InputPage
          header={data['header']}
          str={data['str']}
          onClick={() => this.setState({ status: data['next'] })}
        />
      )
    } else if (data['type'] === 'imagePage') {
      content = (
        <ImagePage
          onClick={() => this.setState({ status: data['next'] })}
          header={data['header']}
          subheader={data['subheader']}
          name={data['name']}
          imgURL={data['imgURL']}
          content={data['content']}
          imgRef={data['imgRef']}
          dataRef={data['dataRef']}
        />
      )
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
}
export default Exhibition
