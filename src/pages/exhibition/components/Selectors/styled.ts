import { styled } from 'common/config'

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
  width: 'min(28vw, 360px)',
  borderRadius: '10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  marginBottom: '17px',
  '@md': {
    width: 'max(35vw, 160px)',
    marginBottom: '8px',
  },
  '@xs': {
    width: '130px',
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

export const SelectorContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  flex: '1 1 0',
  cursor: 'pointer',
})

export const SelectorsConatiner = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignSelf: 'center',
  rowGap: '40px',
  width: '100%',
})
