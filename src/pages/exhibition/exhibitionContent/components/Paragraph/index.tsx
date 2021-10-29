import 'App.css'
import { StyledText } from '../../styled'
import { ParagraphProps } from './types'
import { Refs } from '../Carousel/components/CarouselContent/components/Refs'
const ParagraphPage = (props:ParagraphProps) => {
  const { content, contentRef, onClick } = props

	var contents = []
	for(let i of content){
		contents.push(<StyledText>{i}</StyledText>)
	}
	return (
	<div onClick = {onClick}
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
        {contentRef && <Refs title="อ้างอิง : " refs={contentRef} />}
      </div>
    )
  }

export default ParagraphPage