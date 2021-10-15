// This component just only delay the transition before next scene
import { StyledText } from 'common/components/Typography'
import React, { useEffect } from 'react'
import { RootContainer } from '../Container'
import { IDelayTransitionProps } from './types'

function DelayTransition(props: IDelayTransitionProps) {
  const { delay, onFinish, text } = props
  useEffect(() => {
    setTimeout(() => {
      onFinish({})
    }, delay)
  }, [delay, onFinish])

  return (
    <RootContainer>
      <StyledText css={{ maxWidth: '250px' }} mobileVariant="title2">
        {text || ''}
      </StyledText>
    </RootContainer>
  )
}

export default DelayTransition
