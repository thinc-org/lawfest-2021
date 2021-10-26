import 'App.css'
import TextWithLine from 'common/components/TextWithLine'
import Choice from 'pages/exhibition/components/Choice'
import Button from 'common/components/Button'
import React from 'react'
class Multiplechoice extends React.Component<
  { onClick: any; choiceList: Array<String>; header: string },
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
        <TextWithLine mobileVariant="subhead">{this.props.header}</TextWithLine>
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
