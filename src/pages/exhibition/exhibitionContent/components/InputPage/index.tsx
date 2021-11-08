import 'App.css'
import TextArea from 'common/components/TextArea'
import Button from 'common/components/Button'
import Title from '../Title'
import { StyledText } from 'common/components/Typography'
import { useState } from 'react'

function InputPage(props: { question: string; onClick: any }) {
  const [text, setText] = useState('')
  return (
    <>
      <Title hideQuote />
      <StyledText
        css={{
          margin: '20px 0 5px 12%',
          alignSelf: 'flex-start',
          '@sm': {
            marginLeft: '0',
          },
        }}
        mobileVariant={{ '@md': 'subhead' }}
        variant="h4"
      >
        {props.question}
      </StyledText>
      <TextArea
        placeholder="เล่าให้ฟังหน่อยสิ...."
        css={{ marginBottom: '50px', '@sm': { width: '100%' } }}
        value={text}
        onChange={(event) => {
          setText(event.target.value)
        }}
      />
      <Button
        onClick={props.onClick}
        disabled={text === ''}
        css={{ '@sm': { width: '100%' } }}
      >
        ยืนยันคำตอบ
      </Button>
    </>
  )
}
export default InputPage
