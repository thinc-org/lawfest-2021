import 'App.css'
import Choice from 'pages/exhibition/exhibitionContent/components/Choice'
import Button from 'common/components/Button'
import React, { useState } from 'react'
import Title from '../Title'
import { StyledText } from 'common/components/Typography'
import { ChoicesContainer } from './styled'
import { MultiplechoiceProps } from './props'
const Multiplechoice = (props: MultiplechoiceProps) => {
  const { question, choiceList, onClick } = props
  const [selected, setSelected] = useState(-1)

  return (
    <>
      <Title />
      <StyledText
        mobileVariant={{ '@md': 'subhead' }}
        variant="h4"
        css={{ marginTop: '20px' }}
      >
        {question}
      </StyledText>

      <ChoicesContainer>
        {choiceList.map((choice, idx) => (
          <Choice
            onClick={() => setSelected(idx)}
            selected={idx === selected}
            key={idx}
          >
            {choice}
          </Choice>
        ))}
      </ChoicesContainer>

      <Button
        onClick={onClick}
        disabled={selected === -1}
        css={{ '@sm': { width: '100%' } }}
      >
        ยืนยันคำตอบ
      </Button>
    </>
  )
}
export default Multiplechoice
