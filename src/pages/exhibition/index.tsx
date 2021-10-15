import 'App.css'
import Selectors from 'pages/exhibition/Selectors'
import home from 'assets/pic/home.png'
import React from 'react'
import { StyledText } from './styled'

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
      next: 4,
    },
    5: {
      type: 'text',
      text: 'If justice takes place, there shall be hope.',
      quoteOwner: 'Alberto Manguel',
      quoteOwnerRef: 'CANADIAN NOVELIST',
      next: 5,
    },
    6: {
      type: 'text',
      text: '“Once you choose hope, anything is possible.”',
      quoteOwner: 'Christopher Reeve',
      quoteOwnerRef: 'AMERICAN ACTOR, DIRECTOR, AND ACTIVIST',
      next: 6,
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
      content = (
        <Selectors onClick={(i: any) => this.handleClick(i)}></Selectors>
      )
    else if (data['type'] === 'text') {
      content = (
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          onClick={() => this.setState({ status: data['next'] })}
        >
          <StyledText>{data['text']}</StyledText>
          <p></p>

          {data['quoteOwner'] ? (
            <div
              style={{
                paddingLeft: '20%',
                paddingTop: '2%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                fontSize: '12px',
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  lineHeight: 0,
                }}
              >
                {data['quoteOwner']}
              </p>
              <p
                style={{
                  fontWeight: 'normal',
                  lineHeight: 0,
                }}
              >
                {data['quoteOwnerRef']}
              </p>
            </div>
          ) : null}
          <p style={{marginTop:'10px'}}>—— แตะเพื่อไปต่อ ——</p>
        </div>
      )
    }

    return (
      <div
        style={{
          backgroundColor: '#f1e1c7',
          height: '100vh',
          position: 'relative',
        }}
      >
        <img
          src={home}
          width="30px"
          onClick={() => this.setState({ status: 0 })}
          alt="home-icon"
          style={{paddingTop:'5px',paddingLeft:'10px', position: 'absolute' }}
        ></img>
        {content}
      </div>
    )
  }

  handleClick(i: any) {
    //console.log("click "+i)
    this.setState({ status: i })
  }
}
export default Exhibition
