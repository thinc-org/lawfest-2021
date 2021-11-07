import 'App.css'
import Choice from 'pages/exhibition/exhibitionContent/components/Choice'
import Button from 'common/components/Button'
import React from 'react'
import Title from './Title'
import { StyledText } from '../styled'
import { Quote } from './Carousel/styled'
import TextWithLine from 'common/components/TextWithLine'
class Multiplechoice extends React.Component<
  { onClick: any; choiceList: Array<String>; title: string },
  { selected: 10 }
> {
  constructor(props: any) {
    super(props)
    this.state = { selected: 10 }
  }
  render() {
    let items = this.props.choiceList
    var choices = []
    for (let i of items) {
      if (items.indexOf(i) === this.state.selected) {
        choices.push(<Choice selected>{i}</Choice>)
        choices.push(<p></p>)
      } else {
        choices.push(
          <Choice onClick={() => this.handleClick(items.indexOf(i))}>
            {i}
          </Choice>
        )
        choices.push(<p></p>)
      }
    }
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Title>{this.props.title}</Title>
        <Quote
          variant="h3"
          mobileVariant={{
            '@md': 'title2',
          }}
          >
          If justice takes place,ther shall be hope.
        </Quote>
        <TextWithLine variant="sub1" mobileVariant={{'@md': 'caption2',}}>ALBERTO MANGUEL</TextWithLine>
        
        <StyledText>เมื่อพูดถึงกฎหมายไทย คุณรู้สึกอย่างไร</StyledText>
        <p></p>
        {choices}
        <p></p>
        <Button onClick={this.props.onClick}>ยืนยันคำตอบ</Button>
      </div>
    )
  }

  handleClick(i: any) {
    this.setState({ selected: i })
  }
}
export default Multiplechoice
