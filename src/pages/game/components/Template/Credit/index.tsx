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
      if (nowState === 5) {
        onFinish({})
        return
      }
      setState(++nowState)
    }, 3000)

    return () => {
      window.clearInterval(interval)
    }
  }, [onFinish])

  const generateCredit = () => {
    return CREDIT.map((val, idx) => {
      const firstState = val.name[0].state
      const lastState = val.name[val.name.length - 1].state
      return (
        <FadeContainer show={state >= firstState && state <= lastState}>
          <StyledText variant="h5">{val.topic}</StyledText>
          {val.name.map((_val) => {
            return (
              <FadeContainer
                show={state === _val.state}
                css={{ marginTop: '10px', width: '100%' }}
              >
                <StyledText variant="h6">{_val.thai}</StyledText>
                <StyledText variant="h6">{_val.eng}</StyledText>
              </FadeContainer>
            )
          })}
        </FadeContainer>
      )
    })
  }

  return (
    <RootContainer css={{ flexDirection: 'column' }}>
      <StyledText variant="h3">Credit</StyledText>
      {generateCredit()}
    </RootContainer>
  )
}

export default Credit
