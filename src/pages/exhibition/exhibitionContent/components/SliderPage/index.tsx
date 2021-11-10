import 'App.css'
import React, { useState } from 'react'
import Slider from 'common/components/Slider'
import { StyledText } from '../../styled'
import Button from 'common/components/Button'
import Title from '../Title'
import { SliderPageProps } from './types'

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
      />
      <p></p>
      <StyledText>{question}</StyledText>
      <Button onClick={onClick}>ยืนยันคำตอบ</Button>
    </div>
  )
}
export default SilderPage
