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

export const ContentContainer = styled('div',{
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

export const QuoteContainer = styled('div',{
  paddingLeft: '20%',
  paddingTop: '2%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontSize: '12px',
})