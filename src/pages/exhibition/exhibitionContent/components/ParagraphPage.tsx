import 'App.css'
import { StyledText } from '../styled'
function ParagraphPage (props:{ onClick: any; content: Array<string>; title: string }) {
	var contents = []
	for(let i of props.content){
		contents.push(<StyledText>{i}</StyledText>)
	}
	return (
	<div onClick = {props.onClick}
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
		      marginLeft:'5%',
		      marginRight:'5%',
        }}
      >
        {contents}
      </div>
    )
  }

export default ParagraphPage