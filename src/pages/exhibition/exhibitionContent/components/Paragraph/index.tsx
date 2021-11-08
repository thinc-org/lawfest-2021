import 'App.css'
import { StyledText } from './styled'
import { ParagraphProps } from './types'
import { Refs } from '../Carousel/components/CarouselContent/components/Refs'
import Button from 'common/components/Button'
import Title from '../Title'
import TextWithLine from 'common/components/TextWithLine'
import { Quote } from '../Carousel/styled'
import { useHistory } from 'react-router'
import { createEnumDeclaration } from 'typescript'
const ParagraphPage = (props:ParagraphProps) => {
  const {title, quote, quoteOwner, content, contentRef,final, onClick } = props
  const history = useHistory()

	var contents = []
	for(let i of content){
		contents.push(<StyledText>{i}</StyledText>)
	}
	return (
	    <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
		      marginLeft:'5%',
		      marginRight:'5%',
          paddingTop:'30px'
        }}
      >
        <div
          style={{
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
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
        </div>

        {contents}
        {contentRef && <Refs title="อ้างอิง : " refs={contentRef} />}
        {!final &&
          <Button
            variant="secondary"
            onClick={onClick}
            style={{ marginTop: '10px',marginBottom:'40px',alignSelf:'center'}}
          >
            ไปต่อ
          </Button>
        }
        {final &&
          <Button
            variant="secondary"
            onClick={()=>{history.push('/')}}
            style={{ marginTop: '10px',marginBottom:'40px',alignSelf:'center'}}
          >
            กลับหน้าแรก
          </Button>
        }
      </div>
    )
  }

export default ParagraphPage