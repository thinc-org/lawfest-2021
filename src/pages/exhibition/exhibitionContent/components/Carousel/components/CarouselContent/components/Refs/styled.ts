import { styled } from 'common/config'
export const RefConatainer = styled('div', {
  fontSize: '16px',
  fontWeight: '$regular',
  fontFamily: '$ChulaCharas',
  '@md': {
    fontSize: '12px',
  },
})

export const StyledLink = styled('a', {
  color: '$primary600',
  '&:visited': {
    color: '$primary600',
  },
  '&:focus': {
    color: '$primary600',
  },
  '&:active': {
    color: '$primary600',
  },
  variants: {
    disabled: {
      true: {
        textDecoration: 'none',
        pointerEvents: 'none',
        color: 'black',
        '&:visited': {
          color: 'black',
        },
        '&:focus': {
          color: 'black',
        },
        '&:active': {
          color: 'black',
        },
      },
    },
  },
})
