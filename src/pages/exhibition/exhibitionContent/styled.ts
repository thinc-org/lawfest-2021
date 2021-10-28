import { styled } from 'common/config'

export const StyledText = styled('div', {
  color: 'black',
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily: '$Mitr',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  '@sm': {
    fontSize: '16px',
    marginBottom: '17px',
  },
})
