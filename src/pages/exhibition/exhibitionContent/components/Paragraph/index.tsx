import 'App.css'
import { StyledText } from './styled'
import { ParagraphProps } from './types'
import { Refs } from '../Carousel/components/CarouselContent/components/Refs'
import Button from 'common/components/Button'
import Title from '../Title'
import TextWithLine from 'common/components/TextWithLine'
import { Quote } from '../Carousel/styled'
const ParagraphPage = (props:ParagraphProps) => {
  const {title, quote, quoteOwner, content, contentRef, onClick } = props

	var contents = []
	for(let i of content){
		contents.push(<StyledText>{i}</StyledText>)
	}
	return (
	    <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
		      marginLeft:'5%',
		      marginRight:'5%',
          paddingTop:'30px'
        }}
      >
        <Title>{title}</Title>
        <Quote
          variant="h3"
          mobileVariant={{
            '@md': 'title2',
          }}
        >
          {quote}
        </Quote>
        <TextWithLine variant="sub1" mobileVariant={{'@md': 'caption2',}}>{quoteOwner}</TextWithLine>

        {contents}
        {contentRef && <Refs title="อ้างอิง : " refs={contentRef} />}
        <Button
          variant="secondary"
          onClick={onClick}
          style={{ marginTop: '10px',marginBottom:'40px',alignSelf:'center'}}
        >
          ไปต่อ
        </Button>
      </div>
    )
  }

export default ParagraphPage