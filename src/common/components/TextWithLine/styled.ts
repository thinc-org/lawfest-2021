import { styled } from '@stitches/react'
import { StyledText } from '../Typography'

export const Container = styled('div', {
  width: '80%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Line = styled('div', {
  height: '1px',
  minWidth: '20px',

  backgroundColor: 'Black',
  flexGrow: 1,
})

export const Text = styled(StyledText, {
  flexShrink: 0,
  maxWidth: 'calc(100% - 80px)',
  overflowWrap: 'break-word',
  textAlign: 'center',
})
