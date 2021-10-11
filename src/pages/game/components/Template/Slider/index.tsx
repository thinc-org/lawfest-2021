import { StyledText } from 'common/components/Typography'
import Button from 'common/components/Button'
import React, { useCallback, useEffect, useState } from 'react'
import { ISliderQuestion } from './typed'
import { QuestionContainer, RootContainer } from './styled'
import Slider from 'common/components/Slider'

function SliderTemplate(props: ISliderQuestion) {
  const { question, onSubmit } = props
  const [input, setInput] = useState(50)
  const [isChange, setChange] = useState(false)

  useEffect(() => {
    setInput(50)
    setChange(false)
  }, [])

  const handleSubmit = useCallback(() => {
    onSubmit(input)
  }, [input, onSubmit])

  const handleSetInput = useCallback((val: number) => {
    setInput(val)
    setChange(true)
  }, [])

  return (
    <RootContainer>
      <QuestionContainer>
        <StyledText variant="h5" css={{ paddingBottom: '10px' }}>
          {question || 'sdads'}
        </StyledText>
        <Slider value={input} onChange={handleSetInput}></Slider>
        <Button
          variant="secondary"
          css={{ maxWidth: '200px', display: isChange ? 'block' : 'none' }}
          onClick={handleSubmit}
        >
          ตกลง
        </Button>
      </QuestionContainer>
    </RootContainer>
  )
}

export default SliderTemplate
