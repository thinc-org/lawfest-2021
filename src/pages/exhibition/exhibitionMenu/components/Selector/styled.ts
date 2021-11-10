import { styled } from 'common/config'
import { Link } from 'react-router-dom'

export const SelectorText = styled('div', {
  color: '$secondary900',
  fontSize: '20px',
  fontWeight: '500',
  fontFamily: '$Mitr',
  textAlign: 'center',
  userSelect: 'none',
  '@sm': {
    fontSize: '16px',
  },
})

export const StyledImage = styled('img', {
  width: 'min(28vw, min(360px, 55vh))',
  height: 'min(28vw, min(360px, 55vh))',
  borderRadius: '10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  marginBottom: '17px',
  '@md': {
    width: 'max(35vw, 160px)',
    height: 'max(35vw, 160px)',
    marginBottom: '8px',
  },
  '@xs': {
    width: '130px',
    height: '130px',
    marginBottom: '8px',
  },
})

export const TextConatainer = styled('div', {
  display: 'flex',
  columnGap: '5px',
  '@md': {
    flexDirection: 'column',
  },
})

export const SelectorContainer = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  flex: '1 1 0',
  cursor: 'pointer',
  textDecoration: 'none',
  width: 'min-content',
})
