import Button from 'common/components/Button'
import React, { useCallback, useEffect, useState } from 'react'
import { ISliderQuestion } from './typed'
import { QuestionContainer, QuestionWrapper } from './styled'
import Slider from 'common/components/Slider'
import Question from '../../Question'
import { RootContainer } from '../Container'

function SliderTemplate(props: ISliderQuestion) {
  const { question, onSubmit } = props
  const [input, setInput] = useState(50)
  const [isChange, setChange] = useState(false)

  useEffect(() => {
    setInput(50)
    setChange(false)
  }, [])

  const handleSubmit = useCallback(() => {
    onSubmit({
      storeValue: input,
    })
  }, [input, onSubmit])

  const handleSetInput = useCallback((val: number) => {
    setInput(val)
    setChange(true)
  }, [])

  return (
    <RootContainer>
      <QuestionContainer>
        <QuestionWrapper>
          <Question>{question || 'sdads'}</Question>
        </QuestionWrapper>
        <Slider value={input} onChange={handleSetInput}></Slider>
        <Button
          variant="secondary"
          css={{
            maxWidth: '200px',
            display: isChange ? 'block' : 'none',
            marginTop: '20px',
          }}
          onClick={handleSubmit}
        >
          ตกลง
        </Button>
      </QuestionContainer>
    </RootContainer>
  )
}

export default SliderTemplate
