import { styled } from 'common/config'

export const FooterContainer = styled('div', {
  backgroundColor: '#444C71',
  boxSizing: 'border-box',
  height: '95px',
  padding: '11px 0 10px 0',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@sm': {
    height: '70px',
  },
})

export const StyledImg = styled('img', {
  height: '52px',
  padding: '0 10px 7px 10px',
  '@sm': {
    height: '30px',
    padding: '0 4px 3px 4px',
  },
})

export const FooterText = styled('div', {
  color: '#F1E1C7',
  textTransform: 'uppercase',
  fontSize: '11px',
  fontWeight: '$light',
  fontFamily: '$ChulaCharas',
})
