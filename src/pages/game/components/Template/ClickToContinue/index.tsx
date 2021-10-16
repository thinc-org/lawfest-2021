import TextWithLine from 'common/components/TextWithLine'
import { StyledText } from 'common/components/Typography'
import React, { useCallback } from 'react'
import { RootContainer } from '../Container'
import { IClickToContinue } from './types'

function ClickToContinueTemplate(props: IClickToContinue) {
  const { onSubmit } = props

  const handleSubmit = useCallback(
    (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      onSubmit({})
    },
    [onSubmit]
  )

  return (
    <RootContainer
      css={{ cursor: 'pointer' }}
      onClick={(ev) => handleSubmit(ev)}
    >
      <TextWithLine css={{ position: 'absolute', bottom: '100px' }}>
        <StyledText mobileVariant="button">แตะเพื่อไปต่อ</StyledText>
      </TextWithLine>
    </RootContainer>
  )
}

export default ClickToContinueTemplate
