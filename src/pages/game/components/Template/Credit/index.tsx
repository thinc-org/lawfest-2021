import React, { useCallback, useEffect, useState } from 'react'
import { StyledText } from 'common/components/Typography'
import { RootContainer } from '../Container'
import { FadeContainer, ScrollContainer } from './styled'
import CREDIT from 'common/constant/Scene/Credit'
import { ICreditProps } from './types'
import Candle from 'assets/images/candle.svg'

function Credit(props: ICreditProps) {
  const { onFinish } = props
  const [isStart, setStart] = useState(false)
  const [showSkip, setShowSkip] = useState(false)
  const [alreadySkip, setAlreadySkip] = useState(false)

  const handleOnFinish = useCallback(() => {
    if (alreadySkip) return
    setAlreadySkip(true)
    onFinish({})
  }, [onFinish, alreadySkip])

  useEffect(() => {
    window.setTimeout(() => {
      setStart(true)
    }, 2500)

    window.setTimeout(() => {
      setShowSkip(true)
    }, 5000)
  }, [onFinish])

  const generateCredit = () => {
    return CREDIT.map((val, idx) => {
      return (
        <ScrollContainer
          css={{
            top: `${(idx + 1) * 60}%`,
            bottom: `${(idx + 2) * 60}%`,
          }}
          start={isStart}
        >
          <FadeContainer show={true}>
            <StyledText mobileVariant="title1" css={{ color: '$secondary900' }}>
              {val.topic}
            </StyledText>
            {val.name.map((_val, _key) => {
              return (
                <FadeContainer
                  show={true}
                  key={`section-${val.topic}-${_key}`}
                  css={{ marginTop: '10px', width: '100%' }}
                >
                  <StyledText mobileVariant="title2">{_val.thai}</StyledText>
                  <StyledText mobileVariant="title2">{_val.eng}</StyledText>
                </FadeContainer>
              )
            })}
          </FadeContainer>
        </ScrollContainer>
      )
    })
  }

  return (
    <RootContainer
      css={{
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <ScrollContainer
        css={{ top: '0%', bottom: '100%' }}
        start={isStart}
        onAnimationEnd={() => {
          handleOnFinish()
        }}
      >
        <img
          src={Candle}
          alt="candle"
          style={{
            marginBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '147px',
          }}
        />
        <StyledText
          css={{ maxWidth: '300px', color: '#683F19' }}
          mobileVariant="title2"
        >
          {'แด่ผู้สร้างความหวังให้งานนี้'}
        </StyledText>
      </ScrollContainer>
      {generateCredit()}
      <RootContainer
        css={{
          cursor: showSkip ? 'pointer' : 'default',
          position: 'absolute',
          width: '100%',
          transition: 'opacity 1s linear',
          opacity: showSkip ? 1 : 0,
        }}
        onClick={() => {
          if (showSkip) handleOnFinish()
        }}
      >
        <StyledText
          mobileVariant="subhead"
          css={{ position: 'absolute', top: '30px', right: '50px' }}
        >
          {'ข้าม >>>'}
        </StyledText>
      </RootContainer>
    </RootContainer>
  )
}

export default Credit
