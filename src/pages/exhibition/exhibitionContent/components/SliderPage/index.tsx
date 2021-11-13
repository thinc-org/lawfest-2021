import 'App.css'
import React, { useState } from 'react'
import Slider from 'common/components/Slider'
import Button from 'common/components/Button'
import Title from '../Title'
import { SliderPageProps } from './types'
import { StyledText } from 'common/components/Typography'

function SilderPage(props: SliderPageProps) {
  const { question, onClick } = props
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
      <Title />
      <Slider
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
        css={{ marginTop: '20px' }}
      />
      <StyledText
        css={{
          margin: '20px 0',
        }}
        mobileVariant={{ '@md': 'subhead' }}
        variant="h4"
      >
        {question}
      </StyledText>
      <Button onClick={onClick}>ยืนยันคำตอบ</Button>
    </div>
  )
}
export default SilderPage
