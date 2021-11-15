import { styled } from 'common/config'

export const StyledButton = styled('button', {
  fontSize: '$5',
  fontWeight: '$medium',
  fontFamily: '$Mitr',
  padding: '7px 10px',
  width: '80%',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '2px 2px 4px 0px #00000040',
  cursor: 'pointer',
  color: '$black10',
  overflowWrap: 'break-word',
  '&:disabled': {
    backgroundColor: '$black400',
    '&:hover': {
      backgroundColor: '$black400',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary800',
        '&:hover': {
          backgroundColor: '$primary900',
        },
      },
      secondary: {
        backgroundColor: '$secondary600',
        '&:hover': {
          backgroundColor: '$secondary700',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
