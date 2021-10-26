import React from 'react'
import { Container, Line, Text } from './styled'
import { TextWithLineProps } from './types'

const TextWithLine = ({
  css,
  children,
  leftLineColor,
  rightLineColor,
  ...props
}: TextWithLineProps) => {
  return (
    <Container css={css}>
      <Line
        css={{
          marginRight: '15px',
          background: leftLineColor || css?.color,
        }}
      />
      <Text {...props}>{children}</Text>
      <Line
        css={{
          marginLeft: '15px',
          background: rightLineColor || css?.color,
        }}
      />
    </Container>
  )
}

export default TextWithLine
