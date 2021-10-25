import { styled } from 'common/config'

export const Container = styled('div', {
  gap: '15px',
  padding: '10px',
  variants: {
    imagePosition: {
      top: {
        display: 'flex',
        flexDirection: 'column',
      },
      left: {
        display: 'flex',
      },
    },
  },
  defaultVariants: {
    imagePosition: 'top',
  },
})

export const ArrowContainer = styled('div', {
  '&:disabled': {
    display: 'none',
  },
})

export const StyledImage = styled('img', {
  width: '100%',
  height: '100%',
  variants: {
    imagePosition: {
      top: {},
      left: {
        width: '30%',
        '@sm': {
          width: '40%',
        },
      },
    },
  },
})
