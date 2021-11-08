// This component just only delay the transition before next scene
import { StyledText } from 'common/components/Typography'
import React, { useEffect } from 'react'
import { RootContainer } from '../Container'
import { IDelayTransitionProps } from './types'

function DelayTransition(props: IDelayTransitionProps) {
  const { delay, onFinish, text, img, alt, textColor } = props
  useEffect(() => {
    setTimeout(() => {
      onFinish({})
    }, delay)
  }, [delay, onFinish])

  return (
    <RootContainer css={{ flexDirection: 'column' }}>
      {img && (
        <img
          src={img}
          alt={alt}
          style={{ marginBottom: '20px', height: '157px' }}
        />
      )}
      <StyledText
        css={{ maxWidth: '300px', color: textColor }}
        mobileVariant="title2"
      >
        {text || ''}
      </StyledText>
    </RootContainer>
  )
}

export default DelayTransition
