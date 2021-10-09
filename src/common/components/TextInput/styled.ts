import { styled } from 'common/config'

export const StyledInput = styled('input', {
  width: '80%',
  border: '2px solid #8A5627',
  borderRadius: '5px',
  backgroundColor: '$light_primary',
  height: '40px',
  boxSizing: 'border-box',
  padding: '2px 10px 0 10px',

  fontSize: '17px',
  fontWeight: '$regular',
  fontFamily: '$ChulaCharas',

  '&:focus': {
    outline: 'none',
  },
})
