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
  height: '100%',
  margin: 'auto',
  variants: {
    imagePosition: {
      top: {
        width: 'max(50%, 300px)',
        '@md': {
          width: '100%',
        },
      },
      left: {
        width: '30%',
        '@sm': {
          width: '40%',
        },
      },
    },
  },
})
