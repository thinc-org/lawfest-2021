import { styled } from 'common/config'

export const StyledTextArea = styled('textarea', {
  height: '184px',
  width: '80%',
  boxSizing: 'border-box',

  border: 'none',
  backgroundColor: '$secondary100',
  resize: 'none',
  borderRadius: '5px',
  padding: '22px',

  fontSize: '17px',
  fontWeight: '$regular',
  fontFamily: '$ChulaCharas',

  '&:focus': {
    outline: 'none',
  },

  '&::-webkit-scrollbar': {
    width: 0,
    background: 'transparent',
  },
})
