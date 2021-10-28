import 'App.css'
import React, { useState } from 'react'
import Slider from 'common/components/Slider'
import TextWithLine from 'common/components/TextWithLine'
import { StyledText } from 'pages/exhibition/styled'
import Button from 'common/components/Button'
function SilderPage(props: {
  title: string
  quote: string
  quoteOwner: string
  question: string
  onClick: () => void
}) {
  const { title, quote, quoteOwner, question, onClick } = props
  const [value, setValue] = useState(50)
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>{title}</h2>
      <StyledText>{quote}</StyledText>
      <TextWithLine>{quoteOwner}</TextWithLine>
      <Slider
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      />
      <p></p>
      <StyledText>{question}</StyledText>
      <Button onClick={onClick}>ยืนยันคำตอบ</Button>
    </div>
  )
}
export default SilderPage
