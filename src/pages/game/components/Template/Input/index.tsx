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
    if (!input) return
    onSubmit({
      storeValue: input,
    })
  }, [onSubmit, input])

  return (
    <RootContainer css={{ background: 'rgba(0, 0, 0, 0.5)' }}>
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
          css={{ maxWidth: '200px', opacity: !!input ? 1 : 0 }}
          onClick={handleSubmit}
        >
          ตกลง
        </Button>
      </QuestionContainer>
    </RootContainer>
  )
}

export default InputTemplate
