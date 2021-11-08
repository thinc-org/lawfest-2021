import 'App.css'
import Choice from 'pages/exhibition/exhibitionContent/components/Choice'
import Button from 'common/components/Button'
import React from 'react'
import Title from './Title'
import { StyledText } from '../styled'
class Multiplechoice extends React.Component<
  { onClick: any; choiceList: Array<String> },
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
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: '30px',
          paddingBottom: '40px',
        }}
      >
        <Title />
        <p></p>
        <StyledText>เมื่อพูดถึงกฎหมายไทย คุณรู้สึกอย่างไร</StyledText>
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
