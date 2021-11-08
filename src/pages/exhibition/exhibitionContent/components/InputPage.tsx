import 'App.css'
import { StyledText } from '../styled'
import TextArea from 'common/components/TextArea'
import Button from 'common/components/Button'
import Title from './Title'

function InputPage(props: { question: string; onClick: any }) {
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
      <Title hideQuote />
      <StyledText style={{ marginTop: '20px' }}>{props.question}</StyledText>
      <TextArea placeholder="เล่าให้ฟังหน่อยสิ...." />
      <p></p>
      <Button onClick={props.onClick}>ยืนยันคำตอบ</Button>
    </div>
  )
}
export default InputPage
