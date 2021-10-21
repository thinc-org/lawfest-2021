import { styled } from 'common/config'

export const ResultContainer = styled('div', {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'end',
})

export const InnerContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export const ButtonText = styled('div', {
  fontSize: '$4',
  fontWeight: '$medium',
  fontFamily: '$Mitr',
  '@md': {
    fontSize: '$2',
  },
})
