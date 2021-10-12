import React, { useState } from 'react'
import { StyledText } from 'common/components/Typography'
import Footer from 'common/components/Footer'
import Choice from 'pages/exhibition/components/Choice'
import { default as GameChoice } from 'pages/game/components/Choice'
import Question from 'pages/game/components/Question'
import Dialogue from 'pages/game/components/Dialogue'
import TextInput from 'common/components/TextInput'
import TextArea from 'common/components/TextArea'
import Slider from 'common/components/Slider'
import Button from 'common/components/Button'
import TextWithLine from 'common/components/TextWithLine'

function ComponentsDemo() {
  const [value, setValue] = useState(50)
  const [text, setText] = useState(
    'รถจักรยานยนต์คันหนึ่งแล่นผ่านคุณไป มันเฉี่ยวสีข้างคุณเล็กน้อย โชคดีที่ไม่เป็นอะไร'
  )
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F1E1C7',
      }}
    >
      <StyledText variant="h4">Text With Line</StyledText>
      <TextWithLine mobileVariant="subhead" css={{ color: '$primary600' }}>
        แตะเพื่อเริ่มออกเดินทาง
      </TextWithLine>

      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>

      <StyledText variant="h4">Button</StyledText>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>

      <StyledText variant="h4">Choice</StyledText>
      <Choice>Exhibition Choice</Choice>
      <Choice selected>Exhibition Choice (selected)</Choice>
      <GameChoice>Game Choice</GameChoice>

      <StyledText variant="h4">Game Question</StyledText>
      <Question>จะทำอย่างไรกับเหตุการณ์ที่เกิดขึ้น ?</Question>

      <StyledText variant="h4">Text Input</StyledText>
      <TextInput />

      <StyledText variant="h4">Text Area</StyledText>
      <TextArea placeholder="เล่าให้ฟังหน่อยสิ...." />

      <StyledText variant="h4">Slider</StyledText>
      <Slider
        value={value}
        onChange={(value) => {
          console.log(value)
          setValue(value)
        }}
      />

      <StyledText variant="h4">Dialogue</StyledText>
      <Dialogue
        name="ผู้นำทาง"
        variant="secondary"
        onClick={() => {
          setText((text) => 'x' + text)
        }}
      >
        {text}
      </Dialogue>

      <StyledText variant="h4">Footer</StyledText>
      <Footer />
    </div>
  )
}

export default ComponentsDemo
