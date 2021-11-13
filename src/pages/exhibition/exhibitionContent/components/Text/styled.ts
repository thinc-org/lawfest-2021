import { styled } from 'common/config'

export const ContentContainer = styled('div', {
  flexGrow: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
})

export const QuoteContainer = styled('div', {
  marginTop: '40px',
  alignSelf: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '10%',
})
