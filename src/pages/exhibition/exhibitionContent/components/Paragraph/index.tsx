import 'App.css'
import { StyledText } from './styled'
import { ParagraphProps } from './types'
import { Refs } from '../Carousel/components/CarouselContent/components/Refs'
import Button from 'common/components/Button'
import Title from '../Title'
import { useHistory } from 'react-router'

const ParagraphPage = (props: ParagraphProps) => {
  const { content, contentRef, final, onClick } = props
  const history = useHistory()

  var contents = []
  for (let i of content) {
    contents.push(<StyledText>{i}</StyledText>)
  }
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '5%',
        marginRight: '5%',
        paddingTop: '30px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Title />
      </div>

      {contents}
      {contentRef && <Refs title="อ้างอิง : " refs={contentRef} />}
      {!final && (
        <Button
          variant="secondary"
          onClick={onClick}
          style={{
            marginTop: '10px',
            marginBottom: '40px',
            alignSelf: 'center',
          }}
        >
          ไปต่อ
        </Button>
      )}
      {final && (
        <Button
          variant="secondary"
          onClick={() => {
            history.push('/')
          }}
          style={{
            marginTop: '10px',
            marginBottom: '40px',
            alignSelf: 'center',
          }}
        >
          กลับหน้าแรก
        </Button>
      )}
    </div>
  )
}

export default ParagraphPage
