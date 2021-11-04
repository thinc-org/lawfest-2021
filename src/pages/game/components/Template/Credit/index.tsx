import React, { useEffect, useState } from 'react'
import { StyledText } from 'common/components/Typography'
import { RootContainer } from '../Container'
import { FadeContainer } from './styled'
import CREDIT from 'common/constant/Scene/Credit'
import { ICreditProps } from './types'

function Credit(props: ICreditProps) {
  const [state, setState] = useState(0)
  const { onFinish } = props

  useEffect(() => {
    let nowState = 0
    const interval = window.setInterval(() => {
      if (nowState === 2) {
        onFinish({})
        return
      }
      setState(++nowState)
    }, 4000)

    return () => {
      window.clearInterval(interval)
    }
  }, [onFinish])

  const generateCredit = () => {
    return CREDIT.map((val, idx) => {
      return (
        <FadeContainer show={state === idx}>
          <StyledText mobileVariant="title1" css={{ color: '$secondary900' }}>
            {val.topic}
          </StyledText>
          {val.name.map((_val) => {
            return (
              <FadeContainer
                show={true}
                css={{ marginTop: '10px', width: '100%' }}
              >
                <StyledText mobileVariant="title2">{_val.thai}</StyledText>
                <StyledText mobileVariant="title2">{_val.eng}</StyledText>
              </FadeContainer>
            )
          })}
        </FadeContainer>
      )
    })
  }

  return (
    <RootContainer css={{ flexDirection: 'column' }}>
      {generateCredit()}
    </RootContainer>
  )
}

export default Credit
