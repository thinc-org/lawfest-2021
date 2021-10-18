import 'App.css'
import TextWithLine from 'common/components/TextWithLine'
import Choice from 'pages/exhibition/components/Choice'
import Button from 'common/components/Button'
function Multiplechoice(){
  	return( 
  	<div
    	style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          >
		<TextWithLine mobileVariant="subhead">What is Hope?</TextWithLine>
		<Choice>ตัวเอง</Choice>
		<Choice>เพื่อน</Choice>
		<Choice>สังคม</Choice>
		<p></p>
		<Button>ยืนยันคำตอบ</Button>
	</div>
	)
}

export default Multiplechoice