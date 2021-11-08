import { ParagraphProps } from './types'
import { Refs } from '../Carousel/components/CarouselContent/components/Refs'
import Button from 'common/components/Button'
import Title from '../Title'
import { useHistory } from 'react-router'
import { StyledText } from 'common/components/Typography'

const ParagraphPage = (props: ParagraphProps) => {
  const { content, contentRef, final, onClick } = props
  const history = useHistory()

  const contents = content.map((paragraph, idx) => (
    <StyledText
      variant="body1"
      mobileVariant={{ '@md': 'body' }}
      css={{ padding: '10px 0', width: '100%' }}
      key={idx}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;{paragraph}
    </StyledText>
  ))

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Title />
      <div style={{ margin: '20px 0' }}>
        {contents}
        {contentRef && <Refs title="อ้างอิง : " refs={contentRef} />}
      </div>
      <Button
        variant="secondary"
        onClick={final ? () => history.push('/') : onClick}
        css={{ marginBottom: '40px', '@sm': { width: '100%' } }}
      >
        {final ? 'กลับหน้าแรก' : 'ไปต่อ'}
      </Button>
    </div>
  )
}

export default ParagraphPage
