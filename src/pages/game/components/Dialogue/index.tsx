import { StyledText } from 'common/components/Typography'
import React from 'react'
import { DialogueContainer, NameContainer } from './styled'
import { DialogueProps } from './types'

const Dialogue = (props: DialogueProps) => {
  const { name, variant, children } = props
  return (
    <DialogueContainer>
      <NameContainer variant={variant}>
        <StyledText mobileVariant="footnote">{name}</StyledText>
      </NameContainer>
      <StyledText mobileVariant="body" css={{ textAlign: 'left' }}>
        {children}
      </StyledText>
    </DialogueContainer>
  )
}

export default Dialogue
