import React from 'react'
import { Container, Line, Text } from './styled'
import { TextWithLineProps } from './types'

const TextWithLine = ({ css, children, ...props }: TextWithLineProps) => {
  return (
    <Container css={css}>
      <Line css={{ marginRight: '15px', backgroundColor: css?.color }} />
      <Text {...props}>{children}</Text>
      <Line css={{ marginLeft: '15px', backgroundColor: css?.color }} />
    </Container>
  )
}

export default TextWithLine
