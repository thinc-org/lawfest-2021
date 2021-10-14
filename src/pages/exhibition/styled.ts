import {styled} from 'common/config'

export const SelectorText = styled('div', {
  color: '$secondary900',
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily: '$Mitr',
  textAlign:'center',
  cursor: 'pointer',
  userSelect: 'none',
  '@sm': {
    fontSize: '16px',
    marginBottom: '17px',
  },
})

export const StyledText = styled('div', {
  color: 'black',
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily: '$Mitr',
  textAlign:'center',
  cursor: 'pointer',
  userSelect: 'none',
  '@sm': {
    fontSize: '16px',
    marginBottom: '17px',
  },
})