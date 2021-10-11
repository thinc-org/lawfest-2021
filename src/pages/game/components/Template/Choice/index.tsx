import React from 'react'
import Question from '../../Question'
import { RootContainer } from '../Container'
import { ChoiceButton, DialogueContainer } from './styled'
import { IChoiceTemplate } from './types'

function ChoiceTemplate(props: IChoiceTemplate) {
  const { question, choices } = props
  return (
    <RootContainer css={{ background: 'rgba(0, 0, 0, 0.5)' }}>
      <DialogueContainer>
        <Question>{question}</Question>
        {choices.map((val, idx) => {
          return (
            <ChoiceButton key={idx} onClick={val.onClick}>
              {val.text}
            </ChoiceButton>
          )
        })}
      </DialogueContainer>
    </RootContainer>
  )
}

export default ChoiceTemplate
