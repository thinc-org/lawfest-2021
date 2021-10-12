import { StyledText } from 'common/components/Typography'
import React from 'react'
import useTextAnimation from './hooks/useTextAnimation'
import { DialogueContainer, NameContainer } from './styled'
import { DialogueProps } from './types'

const Dialogue = (props: DialogueProps) => {
  const { name, variant, children, onClick } = props
  const { index, onDialogueClick } = useTextAnimation(children, onClick)

  return (
    <DialogueContainer onClick={onDialogueClick}>
      <NameContainer variant={variant}>
        <StyledText mobileVariant="footnote">{name}</StyledText>
      </NameContainer>
      <StyledText mobileVariant="body" css={{ textAlign: 'left' }}>
        {children.slice(0, index)}
        <span style={{ opacity: '0' }}>{children.slice(index)}</span>
      </StyledText>
    </DialogueContainer>
  )
}

export default Dialogue
