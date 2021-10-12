import { styled } from 'common/config'

export const StyledButton = styled('button', {
  fontSize: '$5',
  fontWeight: '$regular',
  fontFamily: '$ChulaCharas',
  padding: '5px',
  minHeight: '40px',
  width: '80%',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '2px 2px 4px 0px #00000040',
  cursor: 'pointer',
  boxSizing: 'border-box',
  color: '$black10',
  backgroundColor: '#02030380',
  overflowWrap: 'break-word',

  variants: {
    selected: {
      true: {
        border: '4px solid #F0A561',
      },
    },
  },
})
