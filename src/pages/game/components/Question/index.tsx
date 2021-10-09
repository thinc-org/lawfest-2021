import React from 'react'
import { QuestionContainer } from './styled'
import { QuestionProps } from './types'

const Question = ({ children }: QuestionProps) => {
  return (
    <QuestionContainer mobileVariants="headline">{children}</QuestionContainer>
  )
}

export default Question
