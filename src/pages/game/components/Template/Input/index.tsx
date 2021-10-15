import StyledInput from 'common/components/TextInput'
import { StyledText } from 'common/components/Typography'
import Button from 'common/components/Button'
import React, { useCallback, useEffect, useState } from 'react'
import { IInputQuestion } from './typed'
import { QuestionContainer } from './styled'
import { RootContainer } from '../Container'

function InputTemplate(props: IInputQuestion) {
  const { question, onSubmit, placeholder } = props
  const [input, setInput] = useState('')

  useEffect(() => {
    setInput('')
  }, [])

  const handleSubmit = useCallback(() => {
    onSubmit({
      storeValue: input,
    })
  }, [onSubmit, input])

  return (
    <RootContainer>
      <QuestionContainer>
        <StyledText variant="h5" css={{ paddingBottom: '10px' }}>
          {question}
        </StyledText>
        <StyledInput
          placeholder={placeholder || ''}
          css={{ marginBottom: '20px' }}
          value={input}
          onChange={(el) => setInput(el.currentTarget.value)}
        ></StyledInput>
        <Button
          variant="secondary"
          css={{ maxWidth: '200px', display: !!input ? 'block' : 'none' }}
          onClick={handleSubmit}
        >
          ตกลง
        </Button>
      </QuestionContainer>
    </RootContainer>
  )
}

export default InputTemplate
