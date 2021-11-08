import 'App.css'
import { StyledText } from '../styled'
import TextArea from 'common/components/TextArea'
import Button from 'common/components/Button'
import Title from './Title'
import { Quote } from './Carousel/styled'
import TextWithLine from 'common/components/TextWithLine'

function InputPage(props: { question: string; title: string; quote: string; quoteOwner: string; onClick: any }) {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop:'30px',
        paddingBottom:'40px',
      }}
    >
      <Title>{props.title}</Title>
      <Quote
        variant="h3"
        mobileVariant={{
          '@md': 'title2',
        }}
        >
          {props.quote}
      </Quote>
      <TextWithLine variant="sub1" mobileVariant={{'@md': 'caption2',}}>{props.quoteOwner}</TextWithLine>
      <StyledText style={{marginTop:'20px'}}>{props.question}</StyledText>
      <TextArea placeholder="เล่าให้ฟังหน่อยสิ...." />
      <p></p>
      <Button onClick={props.onClick}>ยืนยันคำตอบ</Button>
    </div>
  )
}
export default InputPage
