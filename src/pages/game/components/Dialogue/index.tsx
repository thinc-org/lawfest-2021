import { StyledText } from 'common/components/Typography'
import React from 'react'
import useTextAnimation from './hooks/useTextAnimation'
import { DialogueContainer, NameContainer } from './styled'
import { DialogueProps } from './types'

const Dialogue = (props: DialogueProps) => {
  const { name, variant, children, onClick } = props
  const { text, onDialogueClick } = useTextAnimation(children, onClick)

  return (
    <DialogueContainer onClick={onDialogueClick}>
      <NameContainer variant={variant}>
        <StyledText mobileVariant="footnote">{name}</StyledText>
      </NameContainer>
      <StyledText mobileVariant="body" css={{ textAlign: 'left' }}>
        {text}
      </StyledText>
    </DialogueContainer>
  )
}

export default Dialogue
