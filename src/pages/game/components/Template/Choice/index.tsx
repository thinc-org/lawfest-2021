import React, { useCallback } from 'react'
import Question from '../../Question'
import { RootContainer } from '../Container'
import { ChoiceButton, DialogueContainer } from './styled'
import { IChoiceTemplate } from './types'

function ChoiceTemplate(props: IChoiceTemplate) {
  const { question, choices, handleSubmit } = props

  const handleClick = useCallback(
    (val: string, next: string) => {
      handleSubmit({
        nextSceneOverride: next,
        storeValue: val,
      })
    },
    [handleSubmit]
  )

  return (
    <RootContainer css={{ background: 'rgba(0, 0, 0, 0.5)' }}>
      <DialogueContainer>
        <Question>{question}</Question>
        {choices.map((val, idx) => {
          return (
            <ChoiceButton
              key={idx}
              onClick={() => handleClick(val.value, val.nextScene)}
            >
              {val.text}
            </ChoiceButton>
          )
        })}
      </DialogueContainer>
    </RootContainer>
  )
}

export default ChoiceTemplate
