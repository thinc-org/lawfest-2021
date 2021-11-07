import 'App.css'
import { StyledText } from '../styled'
import TextArea from 'common/components/TextArea'
import Button from 'common/components/Button'
import Title from './Title'

function InputPage(props: { question: string; title: string; onClick: any }) {
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
      <Title>{props.title}</Title>
      <StyledText>{props.question}</StyledText>
      <TextArea placeholder="เล่าให้ฟังหน่อยสิ...." />
      <p></p>
      <Button onClick={props.onClick}>ยืนยันคำตอบ</Button>
    </div>
  )
}
export default InputPage
