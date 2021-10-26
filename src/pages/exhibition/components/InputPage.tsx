import 'App.css'
import { StyledText } from '../styled'
import TextArea from 'common/components/TextArea'
import Button from 'common/components/Button'

function InputPage(props: { str: string; header: string; onClick: any }) {
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
      <h2
        style={{
          padding: '10px',
          color: '#FFFFFF',
          backgroundColor: '#00000099',
          borderRadius: '15px',
        }}
      >
        {props.header}
      </h2>
      <StyledText>{props.str}</StyledText>
      <TextArea placeholder="เล่าให้ฟังหน่อยสิ...." />
      <p></p>
      <Button onClick={props.onClick}>ยืนยันคำตอบ</Button>
    </div>
  )
}
export default InputPage
