import { styled } from 'common/config'
export const RefConatainer = styled('div', {
  fontSize: '12px',
  fontWeight: '$regular',
  fontFamily: '$ChulaCharas',
})
export const StyledLink = styled('a', {
  textDecoration: 'none',
  '&:visited': {
    color: '$primary600',
  },
  '&:focus': {
    color: '$primary600',
  },
  '&:active': {
    color: '$primary600',
  },
})
