import { styled } from 'common/config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
})

export const ButtonConatiner = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '0 5px',
  boxSizing: 'border-box',
})

export const ButtonText = styled('div', {
  fontSize: '$8',
  fontWeight: '$medium',
  fontFamily: '$Mitr',
  marginLeft: '20px',
  lineHeight: '35px',
  '@sm': {
    fontSize: '18px',
    letterSpacing: '0.4px',
    marginLeft: '0',
  },
})

export const StyledImage = styled('img', {
  height: '90%',
  '@sm': {
    height: '80%',
  },
})

export const StyledButton = styled('button', {
  background:
    'linear-gradient(360deg, #F1E1C7 0%, #FBC55C 25%, #EFA561 51.56%, #BF684F 77.08%, #505B89 100%)',

  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '2px 2px 4px 0px #00000040',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: 'min(120px, 13vh)',
  width: '453px',
  margin: '10px',

  '@sm': {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '170px',
    width: '45%',
    maxWidth: '170px',
  },

  '@xs': {
    flexDirection: 'column',
    height: '150px',
    width: '150px',
    padding: '5px',
  },
})

export const StyledText = styled('div', {
  color: '$secondary600',
  fontSize: '20px',
  fontWeight: '$regular',
  fontFamily: '$ChulaCharas',
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '20px',
  cursor: 'pointer',
  userSelect: 'none',
  '@sm': {
    fontSize: '16px',
    marginBottom: '17px',
  },
})
