import 'App.css'
import { StyledText } from '../styled'
import TextArea from 'common/components/TextArea'
import Button from 'common/components/Button'

function InputPage(props:{str:string ,onClick:any}){
  	return( 
  	<div
   	 	style={{
   	        height: '100%',
            display: 'flex',
			justifyContent:'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          >
		<h2>Hopeless but Hoping</h2>
		<StyledText>{props.str}</StyledText>
      	<TextArea placeholder="เล่าให้ฟังหน่อยสิ...."/>
		<p></p>
		<Button onClick={props.onClick}>ยืนยันคำตอบ</Button>
	</div>
	)
}
export default InputPage